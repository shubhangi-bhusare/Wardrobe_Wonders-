package com.app.service;

import java.util.List;

import com.app.dto.ApiResponse;
import com.app.dto.OrderDto;
import com.app.entities.Order;


public interface OrderService {
		List<OrderDto> getAllOrder();
		//Order addNewOrder(Order newOrder);
		ApiResponse addNewOrder(OrderDto newOrder);
		ApiResponse deleteOrder(Long orderid);
		Order GetOrderById(Long id);
		ApiResponse UpdateOrder(Order order);
}
