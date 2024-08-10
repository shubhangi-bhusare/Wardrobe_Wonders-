package com.app.entities;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import javax.persistence.Table;

@Entity
@Table(name="users")
public class User extends BaseEntity {
	@Column(length = 100)
	private String name;
	@Column(length = 50,nullable = false)
	private String email;
	@Column(length = 30,nullable = false)
	private String password;
	@Enumerated(EnumType.STRING)
	private Role role;
	@Column(length = 12)
	private String mobileNumber;
	@Column(length = 50)
	private String address;
	@Column(length = 10)
	private String zipcode;
	@Column(length = 30)
	private String city;
	@Column(length = 30)
	private String state;
	
	
	public User() {
		
	}

	public User(String name, String email, String password, Role role, String mobileNumber, String address,
			String zipcode, String city, String state) {
		super();
		this.name = name;
		this.email = email;
		this.password = password;
		this.role = role;
		this.mobileNumber = mobileNumber;
		this.address = address;
		this.zipcode = zipcode;
		this.city = city;
		this.state = state;
	}



	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	public String getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getZipcode() {
		return zipcode;
	}

	public void setZipcode(String zipcode) {
		this.zipcode = zipcode;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	

	@Override
	public String toString() {
		return "User [name=" + name + ", email=" + email + ", password=" + password + ", role=" + role
				+ ", mobileNumber=" + mobileNumber + ", address=" + address + ", zipcode=" + zipcode + ", city=" + city
				+ ", state=" + state + "]";
	}

	
	
	
}
