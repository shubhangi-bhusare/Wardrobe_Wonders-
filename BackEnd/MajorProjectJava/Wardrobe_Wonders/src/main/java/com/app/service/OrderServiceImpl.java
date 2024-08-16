package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.ApiResponse;
import com.app.dto.OrderDto;
import com.app.dto.ProductDto;
import com.app.entities.Order;
import com.app.entities.Payment;
import com.app.entities.Product;
import com.app.entities.ProductCategory;
import com.app.entities.User;
import com.app.exceptions.ResourceNotFoundException;
import com.app.repository.OrderRepository;
import com.app.repository.PaymentRepository;
import com.app.repository.ProductRepository;
import com.app.repository.UserRepository;
@Service
@Transactional
public class OrderServiceImpl implements OrderService {
	@Autowired
	private OrderRepository repo;
	
	@Autowired
	private ModelMapper mapper;
	@Autowired
	private UserRepository userRepo;
	
	@Autowired 
	private ProductRepository productRepo;
	
	@Autowired
	private PaymentRepository paymentRepo;

	@Override
	public List<OrderDto> getAllOrder() {
		
		return repo.findAll()
				.stream()
				.map(order->mapper.map(order,OrderDto.class))
				.collect(Collectors.toList());
	}

//	@Override
//	public Order addNewOrder(Order newOrder) {
//		
//		return repo.save(newOrder);
//	}
	
	@Override
	public ApiResponse deleteOrder(Long orderid) {
		Order delOrder=repo.findById(orderid)
				.orElseThrow(()->new ResourceNotFoundException("Invalid Order Id!!"));
		repo.delete(delOrder);
		return new ApiResponse("Order with id "+ delOrder.getId() +"deleted !!");
	}

	@Override
	public Order GetOrderById(Long id) {
		Order order=repo.findById(id)
				.orElseThrow(()->new ResourceNotFoundException("Invalid Id!!"));
				return order;
	}

	@Override
	public ApiResponse UpdateOrder(Order order) {
		if(repo.existsById(order.getId()))
		{
			repo.save(order);
			return new ApiResponse("Order with id- "+ order.getId() +" updated successfully!!");
		}
		 return new ApiResponse("Order not updated !!");
	}
	
	@Override
	public ApiResponse addNewOrder(OrderDto newOrder) {
		User user=userRepo.findById(newOrder.getUser_id())
				.orElseThrow(()-> new ResourceNotFoundException("Invalid User id!!!"));
		Payment payment=paymentRepo.findById(newOrder.getPayment_id()).
				orElseThrow(()->new ResourceNotFoundException("Invalid Payment id!!"));
		Product product=productRepo.findById(newOrder.getProduct_id())
				.orElseThrow(()-> new ResourceNotFoundException("Invalid Product id!!"));
		Order order=mapper.map(newOrder, Order.class);
		order.setPayment(payment);
		order.setUser(user);
		order.setProduct(product);
		repo.save(order);
		return new ApiResponse("Added new Order with Id- "+order.getId());
	}

}
