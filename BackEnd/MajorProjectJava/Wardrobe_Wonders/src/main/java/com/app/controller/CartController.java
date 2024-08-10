package com.app.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ApiResponse;

import com.app.entities.Cart;

import com.app.service.CartService;

@RestController
@RequestMapping("/carts")
public class CartController {
	@Autowired
	private CartService cservice;

	@GetMapping("/{id}")
	public ResponseEntity<?> getCartById(Long id)
	{
		return ResponseEntity.ok(cservice.GetCartById(id));
	}
	
	@PostMapping("/addCart")
	public ResponseEntity<?> addCart(@RequestBody Cart cart)
	{
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(cservice.addNewCart(cart));
	}
	
	@DeleteMapping("/deleteCart/{id}")
	public ResponseEntity<?> DeleteCart(@PathVariable Long id)
	{
		return ResponseEntity.ok(cservice.deleteCart(id));
	}
	
	@PutMapping("/updateUser")
	public ResponseEntity<?> UpdateCart(@RequestBody Cart cart)
	{
		return ResponseEntity.status(HttpStatus.ACCEPTED)
				.body(cservice.UpdateCart(cart));
	}

}
