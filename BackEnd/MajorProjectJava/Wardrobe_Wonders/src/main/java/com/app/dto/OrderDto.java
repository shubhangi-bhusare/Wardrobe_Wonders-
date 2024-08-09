package com.app.dto;

import java.time.LocalDate;

import com.app.entities.Status;

public class OrderDto extends BaseDto {
	private LocalDate purchaseDate;
	private Status status;
	
	public OrderDto() {
		// TODO Auto-generated constructor stub
	}

	public OrderDto(LocalDate purchaseDate, Status status) {
		super();
		this.purchaseDate = purchaseDate;
		this.status = status;
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

	@Override
	public String toString() {
		return "OrderDto [purchaseDate=" + purchaseDate + ", status=" + status + "]";
	}
	
	
}
