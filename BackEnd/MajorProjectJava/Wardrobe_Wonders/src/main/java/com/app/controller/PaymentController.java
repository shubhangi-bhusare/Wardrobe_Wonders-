package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.Payment;

import com.app.service.PaymentService;

@CrossOrigin("*")
@RestController
@RequestMapping("/payments")
public class PaymentController {
	@Autowired
	private PaymentService pservice;
	
	@GetMapping("/getPaymentId/{id}")
	 public ResponseEntity<?> getPayment(@PathVariable Long id)
	 {
		 return ResponseEntity.ok(pservice.GetPayment(id));
	 }
	
	@PostMapping("/createPayment")
	 public ResponseEntity<?> AddPayment( @RequestBody Payment payment)
	 {
		 return ResponseEntity.status(HttpStatus.CREATED)
					.body(pservice.createPayment(payment));
	 }
	
	@DeleteMapping("/cancelPayment/{id}")
	 public ResponseEntity<?> DeletePayment( @PathVariable Long id)
	 {
		 return ResponseEntity.ok(pservice.cancelPayment(id));
	 }
	
	
	
}
