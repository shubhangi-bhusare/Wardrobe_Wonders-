package com.app.service;


import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.ApiResponse;
import com.app.entities.Payment;

import com.app.exceptions.ResourceNotFoundException;
import com.app.repository.PaymentRepository;

@Service
@Transactional
public class PaymentServiceImpl implements PaymentService {

	@Autowired
	private PaymentRepository repo;
	

	
	@Override
	public Payment createPayment(Payment newPayment) {
		return repo.save(newPayment);
	}

	@Override
	public ApiResponse cancelPayment(Long paymentid) {
		Payment canclePayment=repo.findById(paymentid)
				.orElseThrow(()->new ResourceNotFoundException("Invalid Payment Id!!"));
		repo.delete(canclePayment);
		return new ApiResponse("Payment with id "+canclePayment.getId()+"cancelled !!");
	}

	@Override
	public Payment GetPayment(Long id) {
		Payment payment=repo.findById(id)
				.orElseThrow(()->new ResourceNotFoundException("Invalid Id!!"));
				return payment;
	}
		
}
