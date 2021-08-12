package com.org.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

//import org.springframework.data.repository.CrudRepository;
import com.org.model.*;
@Repository
public interface EventRepo{

    void save(AddEvent event);

    List<Events> findAll();

    

}

