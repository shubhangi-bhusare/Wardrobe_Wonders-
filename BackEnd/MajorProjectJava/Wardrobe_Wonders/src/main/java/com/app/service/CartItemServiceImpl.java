package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.ApiResponse;
import com.app.dto.CartItemDto;

import com.app.entities.CartItem;
import com.app.entities.User;
import com.app.exceptions.ResourceNotFoundException;
import com.app.repository.CartItemsRepository;
import com.app.repository.UserRepository;

@Service
@Transactional
public class CartItemServiceImpl implements CartItemService {
	
	@Autowired
	private CartItemsRepository repo;
	@Autowired
	private ModelMapper mapper;

	
	
	@Override
	public List<CartItemDto> getAllCartItemDto() {
		return repo.findAll()
				.stream()
				.map(cart->mapper.map(cart,CartItemDto.class))
				.collect(Collectors.toList());
	}

	@Override
	public CartItem addNewCartItem(CartItem newCartItem) {
		return repo.save(newCartItem);
	}

	@Override
	public ApiResponse deleteCartItem(Long cartItemid) {
		CartItem delCartItem=repo.findById(cartItemid)
				.orElseThrow(()->new ResourceNotFoundException("Invalid CartItem Id!!"));
		repo.delete(delCartItem);
		return new ApiResponse("CartItem with id "+delCartItem.getId()+"deleted !!");
	}

	@Override
	public CartItem GetCartItemById(Long id) {
		CartItem cartItem=repo.findById(id)
				.orElseThrow(()->new ResourceNotFoundException("Invalid Id!!"));
				return cartItem;
	}

	@Override
	public ApiResponse UpdateCartItem(CartItem cartItem) {
		if(repo.existsById(cartItem.getId()))
		{
			repo.save(cartItem);
			return new ApiResponse("CartItem with id- "+ cartItem.getId() +" updated successfully!!");
		}
		 return new ApiResponse("CartItem not updated !!");
	}

}
