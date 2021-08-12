package com.org.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.org.controller.UComplaintReqCont;
//import org.springframework.data.repository.CrudRepository;
import com.org.model.UComplaintRequest;
@Repository
public interface UComplaintReqRepo extends JpaRepository<UComplaintRequest, Integer>
{

    

    


}