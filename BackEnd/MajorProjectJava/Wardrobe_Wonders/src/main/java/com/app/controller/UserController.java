package com.app.controller;



import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.app.entities.User;
import com.app.service.UserService;

@CrossOrigin("*")
@RestController
@RequestMapping("/users")
public class UserController {
	@Autowired
	private UserService service;
	
	@GetMapping("/getUsers")
	public ResponseEntity<?> getAllUsers()
	{
		return ResponseEntity.ok(service.getAllUsers());
	}
	
	@GetMapping("/getById/{id}")
	public ResponseEntity<?> getUserById(Long id)
	{
		return ResponseEntity.ok(service.GetUserById(id));
	}
	
	@PostMapping("/addUser")
	public ResponseEntity<?> addUser(@RequestBody User user)
	{
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(service.addNewUser(user));
	}
	@CrossOrigin(origins = "http://localhost:3000")
	@DeleteMapping("/deleteUser/{uid}")
	public ResponseEntity<?> DeleteUser(@PathVariable Long uid)
	{
		return ResponseEntity.ok(service.deleteUser(uid));
	}
	
	@PutMapping("/updateUser")
	public ResponseEntity<?> UpdateUser(@RequestBody User user)
	{
		return ResponseEntity.status(HttpStatus.ACCEPTED).body(service.UpdateUser(user));
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody Map<String, String> loginData)
	{
		 String email = loginData.get("email");
	     String password = loginData.get("password");
		return ResponseEntity.ok(service.authenticate(email, password));
		
	}
}
