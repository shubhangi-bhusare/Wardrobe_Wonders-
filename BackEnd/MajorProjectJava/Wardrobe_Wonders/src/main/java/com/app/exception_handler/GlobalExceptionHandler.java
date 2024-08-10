package com.app.exception_handler;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.app.dto.ApiResponse;
import com.app.exceptions.ResourceNotFoundException;

@RestControllerAdvice
public class GlobalExceptionHandler {
	// method level annotation to tell SC , following is an exc handling method : to
			// handle : ResourceNotFoundException
			@ExceptionHandler(ResourceNotFoundException.class)
			@ResponseStatus(value = HttpStatus.NOT_FOUND)
			public ApiResponse handleResourceNotFoundException(ResourceNotFoundException e) {
				System.out.println("in res not found " + e);
				return new ApiResponse(e.getMessage());
			}
}
