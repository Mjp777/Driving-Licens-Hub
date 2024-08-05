package com.rto.service;

import java.io.IOException;

import com.rto.dto.UserDTO;

public interface IUserDetails {
	public UserDTO registerUser(UserDTO user) throws IOException;
}