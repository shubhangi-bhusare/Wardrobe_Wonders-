package com.app.dto;

import javax.validation.constraints.NotBlank;

import com.app.entities.Role;
import javax.validation.constraints.Email;


import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

public class SignUp {
	@JsonProperty(access = Access.READ_ONLY) // this property only used during ser.
	private Long id;
	@NotBlank(message = "First Name required")
	private String name;
	@Email(message = "Invalid Email!!!")
	private String email;
	@JsonProperty(access = Access.WRITE_ONLY)// this property only used during de-ser.
	private String password;
	private Role role;
	private String mobileNumber;
	private String address;
	private String zipcode;
	private String city;
	private String state;
	public SignUp() {
		// TODO Auto-generated constructor stub
	}
	public SignUp(String name,String email, String password, Role role, String mobileNumber,
			String address, String zipcode, String city, String state) {
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
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
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
		return "SignUp [id=" + id + ", name=" + name + ", email=" + email + ", password=" + password + ", role=" + role
				+ ", mobileNumber=" + mobileNumber + ", address=" + address + ", zipcode=" + zipcode + ", city=" + city
				+ ", state=" + state + "]";
	}
	
	
}
