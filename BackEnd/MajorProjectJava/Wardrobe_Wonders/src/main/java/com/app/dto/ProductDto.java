package com.app.dto;


import com.app.entities.ProductCategory;


public class ProductDto extends BaseDto{
	private String pname;
	private String description;
	private int stock;
	private double price;
	private String gender;
	
	private ProductCategory category;
	public ProductDto() {
		// TODO Auto-generated constructor stub
	}
	public ProductDto(String pname, String description, int stock, double price, String gender, ProductCategory category) {
		super();
		this.pname = pname;
		this.description = description;
		this.stock = stock;
		this.price = price;
		this.gender = gender;
		this.category = category;
	}
	public String getPname() {
		return pname;
	}
	public void setPname(String pname) {
		this.pname = pname;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public int getStock() {
		return stock;
	}
	public void setStock(int stock) {
		this.stock = stock;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public ProductCategory getCategory() {
		return category;
	}
	public void setCategory(ProductCategory category) {
		this.category = category;
	}
	@Override
	public String toString() {
		return "ProductDto [pname=" + pname + ", description=" + description + ", stock=" + stock + ", price=" + price
				+ ", gender=" + gender + ", category=" + category + "]";
	}

	
	
}
