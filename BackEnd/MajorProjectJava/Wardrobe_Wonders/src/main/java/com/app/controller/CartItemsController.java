package com.app.controller;

import java.util.List;

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
import com.app.dto.CartItemDto;

import com.app.entities.CartItem;

import com.app.service.CartItemService;


@RestController
@RequestMapping("/cartItems")
public class CartItemsController {
	@Autowired
	private CartItemService cservice;
	
	@GetMapping("/getCartItem")
	public ResponseEntity<?>  getAllCartItems()
	{
		return ResponseEntity.ok(cservice.getAllCartItemDto());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?>  getCartItemById(Long id)
	{
		return ResponseEntity.ok(cservice.GetCartItemById(id));
	}
	
	@PostMapping("/addCartItem")
	public ResponseEntity<?>  addCartItem(@RequestBody CartItem cartItem)
	{
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(cservice.addNewCartItem(cartItem));
	}
	
	@DeleteMapping("/deleteCartItem/{id}")
	public ResponseEntity<?>  DeleteCartItem(@PathVariable Long id)
	{
		return ResponseEntity.ok(cservice.deleteCartItem(id));
	}
	
	@PutMapping("/updateUser")
	public ResponseEntity<?>  UpdateCartItem(@RequestBody CartItem cartItem)
	{
		return ResponseEntity.status(HttpStatus.ACCEPTED)
				.body(cservice.UpdateCartItem(cartItem));
	}
}
