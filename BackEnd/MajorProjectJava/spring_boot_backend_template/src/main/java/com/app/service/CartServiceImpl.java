package com.app.service;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.ApiResponse;
import com.app.entities.Cart;

import com.app.exceptions.ResourceNotFoundException;
import com.app.repository.CartRepository;


@Service
@Transactional
public class CartServiceImpl implements CartService {
	@Autowired
	private CartRepository repo;
	
	
	@Override
	public Cart addNewCart(Cart newCart) {
		return repo.save(newCart);
	}

	@Override
	public ApiResponse deleteCart(Long cartid) {
		Cart delCart=repo.findById(cartid)
				.orElseThrow(()->new ResourceNotFoundException("Invalid Cart Id!!"));
		repo.delete(delCart);
		return new ApiResponse("Cart with id "+delCart.getId()+"deleted !!");
	}

	@Override
	public Cart GetCartById(Long id) {
		Cart cart=repo.findById(id)
				.orElseThrow(()->new ResourceNotFoundException("Invalid Id!!"));
				return cart;
	}

	@Override
	public ApiResponse UpdateCart(Cart cart) {
		if(repo.existsById(cart.getId()))
		{
			repo.save(cart);
			return new ApiResponse("Cart with id- "+ cart.getId() +" updated successfully!!");
		}
		 return new ApiResponse("Cart not updated !!");
	}

}
