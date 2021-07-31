package java.com.srm.springboot.model;
import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

@Entity

@Table (name="login")
public class Login
{
@Id 
@GeneratedValue(strategy = GenerationType.AUTO)
private int id;
@Column
public  String uname;
@Column
public String pwd;

public Login() {
}
public Login(String uname, String pwd) {
    this.uname = uname;
    this.pwd = pwd;
}
public String getUname() {
    return uname;
}
public void setUname(String uname) {
    this.uname = uname;
}
public String getPwd() {
    return pwd;
}
public void setPwd(String pwd) {
    this.pwd = pwd;
}
@Override
public String toString() {
    return "Login [pwd=" + pwd + ", uname=" + uname + "]";
}



}



