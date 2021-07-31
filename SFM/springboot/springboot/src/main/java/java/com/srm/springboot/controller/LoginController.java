package java.com.srm.springboot.controller;
//import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.DeleteMapping;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.com.srm.springboot.model.*;
import java.com.srm.springboot.repository.LoginRepository;
import java.com.srm.springboot.service.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class LoginController 
{

@Autowired

//LoginService loginService;
public LoginRepository loginRepository;


@PostMapping("/login")
private void saveLogin(@RequestBody Login login) 
{
    loginRepository.save(login);
System.out.println("Login was Successfull..");

}


}

