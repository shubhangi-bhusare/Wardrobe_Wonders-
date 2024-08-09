package com.app.entities;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="categories")
public class ProductCategory extends BaseEntity {
	private String cname;
	public ProductCategory() {
		// TODO Auto-generated constructor stub
	}
	public ProductCategory(String cname) {
		super();
		this.cname = cname;
	}
	public String getCname() {
		return cname;
	}
	public void setCname(String cname) {
		this.cname = cname;
	}
	@Override
	public String toString() {
		return "ProductCategory [cname=" + cname + "]";
	}
	
	
}
