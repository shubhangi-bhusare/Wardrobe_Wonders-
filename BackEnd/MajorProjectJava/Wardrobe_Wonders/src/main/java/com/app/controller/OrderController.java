package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.OrderDto;
import com.app.entities.Order;

import com.app.service.OrderService;

@CrossOrigin("*")
@RestController
@RequestMapping("/orders")
public class OrderController {
	@Autowired
	private OrderService oservice;
	
	@GetMapping("/getOrders")
	 public ResponseEntity<?> getAllOrders()
	 {
		 return ResponseEntity.ok(oservice.getAllOrder());
	 }
	
	@DeleteMapping("/deleteOrder/{id}")
	 public ResponseEntity<?> DeleteOrder( @PathVariable Long id)
	 {
		 return ResponseEntity.ok(oservice.deleteOrder(id));
	 }
	
	@PostMapping("/addOrder")
	 public ResponseEntity<?> AddOrder( @RequestBody OrderDto order)
	 {
		 return ResponseEntity.status(HttpStatus.CREATED)
					.body(oservice.addNewOrder(order));
	 }
	@GetMapping("/getOrderById/{id}")
	 public ResponseEntity<?> getOrder(@PathVariable Long id)
	 {
		 return ResponseEntity.ok(oservice.GetOrderById(id));
	 }
	
	@PutMapping("/updateOrder")
	public ResponseEntity<?> updateOrder(@RequestBody Order order)
	 {
		return ResponseEntity.status(HttpStatus.ACCEPTED)
				.body(oservice.UpdateOrder(order));
	 }
	
}
