package com.org.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

//import org.springframework.data.repository.CrudRepository;
import com.org.model.*;
@Repository
public interface ProfileRepo extends JpaRepository<Profile, Integer>
{


}

