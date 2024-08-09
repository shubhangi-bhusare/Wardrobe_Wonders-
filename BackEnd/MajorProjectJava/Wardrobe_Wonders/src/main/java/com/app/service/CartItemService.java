package com.app.service;

import java.util.List;

import com.app.dto.ApiResponse;
import com.app.dto.CartItemDto;

import com.app.entities.CartItem;


public interface CartItemService {
	List<CartItemDto> getAllCartItemDto();
	CartItem addNewCartItem(CartItem newCartItem);
	ApiResponse deleteCartItem(Long cartItemid);
	CartItem GetCartItemById(Long id);
	ApiResponse UpdateCartItem(CartItem cartItem);
}
