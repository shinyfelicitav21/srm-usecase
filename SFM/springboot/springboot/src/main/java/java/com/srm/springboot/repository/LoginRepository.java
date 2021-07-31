package java.com.srm.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.repository.CrudRepository;
import java.com.srm.springboot.model.*;

public interface LoginRepository extends JpaRepository<Login, Integer>
{


}
