package com.org.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.DeleteMapping;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.org.model.*;
import com.org.repository.ProfileRepo;
import com.org.service.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class ProfileController 
{

@Autowired
public ProfileRepo prepo;


@PostMapping(value = "/profile")
public ResponseEntity<Profile> submitData(@RequestBody Profile prof) {
    System.out.println("Insertion method!!!");
    System.out.println(prof);
  
    prepo.save(prof);
    System.out.println("User details:" + prof);
    System.out.println("Successfully inserterd");
    return new ResponseEntity<Profile>(prof, HttpStatus.CREATED);
  
}

@GetMapping(value = "/profile")
    public ResponseEntity<List<Profile>> fetchAll() {
        return new ResponseEntity<List<Profile>>(prepo.findAll(), HttpStatus.OK);
    }
}


