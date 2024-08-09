package com.app.controller;

import java.util.List;

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
import com.app.dto.CartItemDto;

import com.app.entities.CartItem;

import com.app.service.CartItemService;


@RestController
@RequestMapping("/cartItems")
public class CartItemsController {
	@Autowired
	private CartItemService cservice;
	
	@GetMapping("/getCartItem")
	public List<CartItemDto> getAllCartItems()
	{
		return cservice.getAllCartItemDto();
	}
	
	@GetMapping("/{id}")
	public CartItem getCartItemById(Long id)
	{
		return cservice.GetCartItemById(id);
	}
	
	@PostMapping("/addCartItem")
	public CartItem addCartItem(@RequestBody CartItem cartItem)
	{
		return cservice.addNewCartItem(cartItem);
	}
	
	@DeleteMapping("/deleteCartItem/{id}")
	public ApiResponse DeleteCartItem(@PathVariable Long id)
	{
		return cservice.deleteCartItem(id);
	}
	
	@PutMapping("/updateUser")
	public ApiResponse UpdateCartItem(@RequestBody CartItem cartItem)
	{
		return cservice.UpdateCartItem(cartItem);
	}
}
