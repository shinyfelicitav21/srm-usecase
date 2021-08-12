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
import com.org.repository.EventRepo;
import com.org.service.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class EventCont
{

@Autowired
private EventRepo erepo;


@PostMapping("/addevent")
private void saveEvent(@RequestBody AddEvent event) 
{
    erepo.save(event);
System.out.println("Event added  successfully!!");

}
@GetMapping(value = "/events")
    public ResponseEntity<List<Events>> fetchAll() {
        return new ResponseEntity<List<Events>>(erepo.findAll(), HttpStatus.OK);
    }

}

