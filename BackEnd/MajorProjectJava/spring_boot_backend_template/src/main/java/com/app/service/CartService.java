package com.app.service;

import com.app.dto.ApiResponse;
import com.app.entities.Cart;


public interface CartService {
	Cart addNewCart(Cart newCart);
	ApiResponse deleteCart(Long cartid);
	Cart GetCartById(Long id);
	ApiResponse UpdateCart(Cart cart);
}
