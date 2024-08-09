package com.app.controller;



import org.springframework.beans.factory.annotation.Autowired;
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
	public Cart getCartById(Long id)
	{
		return cservice.GetCartById(id);
	}
	
	@PostMapping("/addCart")
	public Cart addCart(@RequestBody Cart cart)
	{
		return cservice.addNewCart(cart);
	}
	
	@DeleteMapping("/deleteCart/{id}")
	public ApiResponse DeleteCart(@PathVariable Long id)
	{
		return cservice.deleteCart(id);
	}
	
	@PutMapping("/updateUser")
	public ApiResponse UpdateCart(@RequestBody Cart cart)
	{
		return cservice.UpdateCart(cart);
	}

}
