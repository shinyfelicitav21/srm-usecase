package com.org.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.org.api.model.Country;
import com.org.api.service.CountryService;

//@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
//@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class ResourceController extends BaseController {
	
	@Autowired
	private CountryService service;
	
	//@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping("/hellouser")
	public String getUser()
	{
		return "Hello User";
	}
	
	//@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/helloadmin", method = RequestMethod.GET)
	public String getAdmin()
	{
		return "Hello Admin";
	}
	
	//@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping("/countries")
	public List<Country> getCountries()
	{
		System.out.println(this.getUserContext());
		return service.getCountries();
	}
	
	
}
