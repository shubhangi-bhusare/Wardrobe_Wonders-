package com.app.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="carts")
public class Cart extends BaseEntity {
	
	@OneToOne
	@JoinColumn(name="user_id")
	private User user; 
	
	@OneToMany(mappedBy = "cart", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<CartItem> cartItems;
	
	
	public Cart(User user) {
		super();
		this.user = user;
	}


	public User getUser() {
		return user;
	}


	public void setUser(User user) {
		this.user = user;
	}


	public Cart() {
		// TODO Auto-generated constructor stub
	}


	@Override
	public String toString() {
		return "Cart [user=" + user + "]";
	}
	
}
