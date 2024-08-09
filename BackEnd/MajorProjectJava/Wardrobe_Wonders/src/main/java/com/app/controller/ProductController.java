package com.app.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.Product;
import com.app.service.ProductService;

@RestController
@RequestMapping("/products")
public class ProductController {
	@Autowired
	private ProductService pservice;
	
	
	@GetMapping("/getProducts")
	 public ResponseEntity<?> getAllProducts()
	 {
		 return ResponseEntity.ok(pservice.getAllProducts());
	 }
	
	@DeleteMapping("/deleteProduct/{id}")
	 public ResponseEntity<?> DeleteProduct( @PathVariable Long id)
	 {
		 return ResponseEntity.ok(pservice.deleteProduct(id));
	 }
	
	@PostMapping("/addProduct")
	 public ResponseEntity<?> AddProduct( @RequestBody Product product)
	 {
		 return ResponseEntity.ok(pservice.addNewProduct(product));
	 }
	@GetMapping("/getProductById/{id}")
	 public ResponseEntity<?> getProducts(@PathVariable Long id)
	 {
		 return ResponseEntity.ok(pservice.GetProductById(id));
	 }
	
	@PostMapping("/updateProduct")
	public ResponseEntity<?> updateProduct(@RequestBody Product prod)
	 {
		 return ResponseEntity.ok(pservice.UpdateProduct(prod));
	 }
}

