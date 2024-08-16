package com.app.dto;

import java.time.LocalDate;
import com.app.entities.Status;


public class OrderDto extends BaseDto {
	private LocalDate purchaseDate;
	private Status status;
	
	private Long user_id;
	
	private Long product_id;
	
	private Long payment_id;
	
	public OrderDto() {
		// TODO Auto-generated constructor stub
	}

//	public OrderDto(LocalDate purchaseDate, Status status) {
//		super();
//		this.purchaseDate = purchaseDate;
//		this.status = status;
//	}
	

	public OrderDto(Long user_id, Long product_id, Long payment_id) {
		super();
		this.user_id = user_id;
		this.product_id = product_id;
		this.payment_id = payment_id;
	}

	public LocalDate getPurchaseDate() {
		return purchaseDate;
	}

	public void setPurchaseDate(LocalDate purchaseDate) {
		this.purchaseDate = purchaseDate;
	}

	public Status getStatus() {
		return status;
	}

	public void setStatus(Status status) {
		this.status = status;
	}
	
	public Long getUser_id() {
		return user_id;
	}

	public void setUser_id(Long user_id) {
		this.user_id = user_id;
	}

	public Long getProduct_id() {
		return product_id;
	}

	public void setProduct_id(Long product_id) {
		this.product_id = product_id;
	}

	public Long getPayment_id() {
		return payment_id;
	}

	public void setPayment_id(Long payment_id) {
		this.payment_id = payment_id;
	}

	@Override
	public String toString() {
		return "OrderDto [purchaseDate=" + purchaseDate + ", status=" + status + ", user_id=" + user_id
				+ ", product_id=" + product_id + ", payment_id=" + payment_id + "]";
	}

	
	
	
}
