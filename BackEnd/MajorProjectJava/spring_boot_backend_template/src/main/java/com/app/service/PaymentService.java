package com.app.service;

import com.app.dto.ApiResponse;
import com.app.entities.Payment;


public interface PaymentService {
	Payment createPayment(Payment newPayment);
	ApiResponse cancelPayment(Long paymentid);
	Payment GetPayment(Long id);
}
