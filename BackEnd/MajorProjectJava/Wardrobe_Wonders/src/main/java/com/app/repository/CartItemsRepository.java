package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.CartItem;

public interface CartItemsRepository extends JpaRepository<CartItem, Long> {

}
