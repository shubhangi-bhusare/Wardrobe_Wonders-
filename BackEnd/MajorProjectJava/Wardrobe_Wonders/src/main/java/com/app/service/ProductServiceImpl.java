package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.ApiResponse;
import com.app.dto.ProductDto;

import com.app.entities.Product;
import com.app.entities.ProductCategory;
import com.app.exceptions.ResourceNotFoundException;
import com.app.repository.CategoryRepository;
import com.app.repository.ProductRepository;



@Service
@Transactional
public class ProductServiceImpl implements ProductService {

	@Autowired
	private ProductRepository repo;
	@Autowired
	private ModelMapper mapper;
	@Autowired
	private CategoryRepository categoryRepo;

//	@Override
//	public List<ProductDto> getAllProducts() {
//		return repo.findAll()
//				.stream()
//				.map(product->mapper.map(product,ProductDto.class))
//				.collect(Collectors.toList());
//	}
	@Override
	public List<ProductDto> getAllProducts() {
	    return repo.findAll()
	            .stream()
	            .map(product -> {
	                ProductDto productDto = mapper.map(product, ProductDto.class);
	                
	                // Set the category_id manually to avoid null value
	                if (product.getCategory() != null) {
	                    productDto.setCategory_id(product.getCategory().getId());
	                }
	                
	                return productDto;
	            })
	            .collect(Collectors.toList());
	}

	@Override
	public ApiResponse deleteProduct(Long productid) {
		Product delProduct=repo.findById(productid)
				.orElseThrow(()->new ResourceNotFoundException("Invalid Product Id!!"));
		repo.delete(delProduct);
		return new ApiResponse("Product with id "+delProduct.getId()+"deleted !!");
	}

	@Override
	public Product GetProductById(Long id) {
		Product prod=repo.findById(id)
				.orElseThrow(()->new ResourceNotFoundException("Invalid Id!!"));
				return prod;
	}

	@Override
	public ApiResponse UpdateProduct(Product product) {
		if(repo.existsById(product.getId()))
		{
			repo.save(product);
			return new ApiResponse("Product with id- "+ product.getId() +" updated successfully!!");
		}
		 return new ApiResponse("Product not updated !!");
	}



	@Override
	public ApiResponse addNewProduct(ProductDto newProduct) {
		
		//firstly deal with parent table and parent table is ProductCategory
		//after that add product if and only if category is exists!! i.e mapping is done here
		
		ProductCategory category=
				categoryRepo.findById(newProduct.getCategory_id())//need category repo dependency here
				.orElseThrow(()->new ResourceNotFoundException("Category not found!!!"));
		System.out.println("in service of productserviceImpl");
		Product prod=mapper.map(newProduct,Product.class);
		prod.setCategory(category);//here set category on our product
		repo.save(prod);
		return new ApiResponse("Added new Product with Id- "+prod.getId());
	}

}
