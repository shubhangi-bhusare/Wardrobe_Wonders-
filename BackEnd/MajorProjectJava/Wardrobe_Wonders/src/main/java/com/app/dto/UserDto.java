package com.app.dto;


import com.app.entities.Role;


public class UserDto extends BaseDto {
	private String name;
	private String email;
	private Role role;
	private String mobileNumber;
	private String address;
	private String zipcode;
	private String city;
	private String state;
	
	public UserDto() {
		// TODO Auto-generated constructor stub
	}
	

	public UserDto(String name, String email, Role role, String mobileNumber, String address, String zipcode,
			String city, String state) {
		super();
		this.name = name;
		this.email = email;
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
		return "UserDto [name=" + name + ", email=" + email + ", role=" + role + ", mobileNumber=" + mobileNumber
				+ ", address=" + address + ", zipcode=" + zipcode + ", city=" + city + ", state=" + state + "]";
	}
	
	
	
}
