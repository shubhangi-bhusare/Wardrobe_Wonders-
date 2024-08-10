package com.app.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="products")
public class Product extends BaseEntity {
	@Column(length = 30)
	private String pname;
	@Column(length = 100)
	private String description;
	private int stock;
	private double price;
	@Column(length = 30)
	private String genderType;//type male or female
	@ManyToOne
	@JoinColumn(name="category_id")
	private ProductCategory category;
	
	public Product() {
		
	}

	

	public Product(String pname, String description, int stock, double price, String genderType,
			ProductCategory category) {
		super();
		this.pname = pname;
		this.description = description;
		this.stock = stock;
		this.price = price;
		this.genderType = genderType;
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

	
	public String getGenderType() {
		return genderType;
	}



	public void setGenderType(String genderType) {
		this.genderType = genderType;
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
				+ ", genderType=" + genderType + ", category=" + category + "]";
	}

	
	
	
	
}
