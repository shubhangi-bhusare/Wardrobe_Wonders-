package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.ApiResponse;
import com.app.dto.UserDto;
import com.app.entities.User;
import com.app.exceptions.ResourceNotFoundException;
//import com.app.exceptions.ResourceNotFoundeException;
import com.app.repository.UserRepository;
@Service
@Transactional
public class UserServiceImpl implements UserService {
	@Autowired
	private UserRepository repo;
	@Autowired
	private ModelMapper mapper;

	@Override
	public List<UserDto> getAllUsers() {
		
		return repo.findAll()
				.stream()
				.map(user->mapper.map(user,UserDto.class))
				.collect(Collectors.toList());
	}

//	@Override
//	public UserDto addNewUser(UserDto userdto) {
////		User userEntity=mapper.map(userdto, User.class);//DTO to entity
////		User saveUser=repo.save(userEntity);//save entity
////		return mapper.map(saveUser,UserDto.class);//entity to dto
//		
//		
//	}
	

	@Override
	public ApiResponse deleteUser(Long userid) {
		User delUser=repo.findById(userid)
				.orElseThrow(()->new ResourceNotFoundException("Invalid User Id!!"));
		repo.delete(delUser);
		return new ApiResponse("User with id "+delUser.getId()+"deleted !!");
	}

	@Override
	public User addNewUser(User newUser) {
		return repo.save(newUser);
	}

//	@Override
//	public UserDto GetUserById(Long id) {
//		User u=repo.findById(id)
//		.orElseThrow(()->new ResourceNotFoundException("Invalid Id!!"));
//		return mapper.map(u,UserDto.class);
//	}
	
	@Override
	public User GetUserById(Long id) {
		User user=repo.findById(id)
		.orElseThrow(()->new ResourceNotFoundException("Invalid Id!!"));
		return user;
	}

	@Override
	public ApiResponse UpdateUser(User user) {
		if(repo.existsById(user.getId()))
		{
			repo.save(user);
			return new ApiResponse("User with id- "+ user.getId() +" updated successfully!!");
		}
		 return new ApiResponse("User not updated !!");
	}

	
	
}
