package com.app.service;

import java.util.List;

import com.app.dto.ApiResponse;
import com.app.dto.ProductDto;
import com.app.entities.Product;
import com.app.entities.User;

public interface ProductService {
		List<ProductDto> getAllProducts();
		ApiResponse addNewProduct(ProductDto newProduct);
		ApiResponse deleteProduct(Long productid);
		Product GetProductById(Long id);
		ApiResponse UpdateProduct(Product productid);
}
