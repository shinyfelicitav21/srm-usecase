
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
import com.org.repository.UComplaintReqRepo;
import com.org.service.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class UComplaintReqCont
{

@Autowired
private UComplaintReqRepo ucomplaint;


@PostMapping("/complaint")
private void saveComplaint(@RequestBody UComplaintRequest complaint) 
{
    ucomplaint.save(complaint);
System.out.println("Complaint has been filed successfully!!");

}
@GetMapping(value = "/complaint")
    public ResponseEntity<List<UComplaintRequest>> fetchAll() {
        return new ResponseEntity<List<UComplaintRequest>>(ucomplaint.findAll(), HttpStatus.OK);
    }

}

