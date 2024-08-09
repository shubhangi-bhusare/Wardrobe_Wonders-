package com.app.entities;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="products")
public class Product extends BaseEntity {
	private String pname;
	private String description;
	private int stock;
	private double price;
	private String gender;//type male or female
	@ManyToOne
	@JoinColumn(name="category_id")
	private ProductCategory category;
	
	public Product() {
		
	}

	public Product(String pname, String description, int stock, double price, String gender) {
		super();
		this.pname = pname;
		this.description = description;
		this.stock = stock;
		this.price = price;
		this.gender = gender;
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
		return "Product [pname=" + pname + ", description=" + description + ", stock=" + stock + ", price=" + price
				+ ", gender=" + gender + "]";
	}

	
	
	
}
