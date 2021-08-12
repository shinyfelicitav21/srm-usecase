package com.org.api.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.org.api.model.Country;
import com.org.api.model.DAOUser;

@Repository
public interface CountryRepository extends JpaRepository<Country, Integer>  {

}
