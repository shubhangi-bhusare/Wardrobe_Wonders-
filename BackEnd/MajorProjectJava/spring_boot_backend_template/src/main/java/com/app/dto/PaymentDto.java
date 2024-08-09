package com.app.dto;

import java.time.LocalDate;

import com.app.entities.PaymentMode;

public class PaymentDto extends BaseDto {
	private double amount;
	private LocalDate paymentDate;
	private PaymentMode mode;
	
	public PaymentDto() {
		// TODO Auto-generated constructor stub
	}

	public PaymentDto(double amount, LocalDate paymentDate, PaymentMode mode) {
		super();
		this.amount = amount;
		this.paymentDate = paymentDate;
		this.mode = mode;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public LocalDate getPaymentDate() {
		return paymentDate;
	}

	public void setPaymentDate(LocalDate paymentDate) {
		this.paymentDate = paymentDate;
	}

	public PaymentMode getMode() {
		return mode;
	}

	public void setMode(PaymentMode mode) {
		this.mode = mode;
	}

	@Override
	public String toString() {
		return "PaymentDto [amount=" + amount + ", paymentDate=" + paymentDate + ", mode=" + mode + "]";
	}
	
}
