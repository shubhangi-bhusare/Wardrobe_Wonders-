package com.app.service;

import java.util.List;

import com.app.dto.ApiResponse;
import com.app.dto.SignUp;
import com.app.dto.UserDto;

import com.app.entities.User;

public interface UserService {
	List<UserDto> getAllUsers();
	User addNewUser(User newUser);
	ApiResponse deleteUser(Long userid);
	User GetUserById(Long id);
	ApiResponse UpdateUser(User user);
	
	User authenticate(String email, String password);
  	//to register new user
//	SignUp userRegistration(SignUp reqDTO);

}
