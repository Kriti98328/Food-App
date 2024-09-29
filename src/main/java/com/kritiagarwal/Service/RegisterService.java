package com.kritiagarwal.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kritiagarwal.Entity.Register;
import com.kritiagarwal.Repository.RegisterRepository;

@Service
public class RegisterService {
	@Autowired
	private RegisterRepository rrepo;
	
	public void addData (Register fd)
	{
		rrepo.save(fd);
	}
	public List<Register> getData()
	{
		return rrepo.findAll();
	}
	public Register checkLogin(String uname, String pass) {
		return rrepo.checkLogin(uname, pass);
	}
	

}
