package com.app.dto;

public class BaseDto {
	private Long id;
	public BaseDto() {
		// TODO Auto-generated constructor stub
	}
	public BaseDto(Long id) {
		super();
		this.id = id;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	@Override
	public String toString() {
		return "BaseDto [id=" + id + "]";
	}
	
}
