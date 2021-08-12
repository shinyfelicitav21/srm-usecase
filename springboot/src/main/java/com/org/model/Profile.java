package com.org.model;
import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.Table;

// import jdk.internal.joptsimple.internal.Columns;
// import jdk.internal.jshell.tool.resources.version;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

@Entity

@Table (name="profile")
public class Profile
{
@Id 
@GeneratedValue(strategy = GenerationType.AUTO)
private int id;
@Column
public  String fname;
@Column
public String lname;
@Column
public String dob;
@Column
public String email;
@Column
public String nationality;
@Column
public String religion;
@Column
public String bg;
@Column
public String city;
@Column
public String state;
@Column
public String country;
@Column
public String pin;


public Profile() {
}
public Profile(String fname, String lname,String dob,String email,String nationality,String religion,String bg,String city,String state,String country,String pin ) {
    this.fname = fname;
    this.lname= lname;
    this.dob= dob;
    this.email= email;
    this.nationality= nationality;
    this.religion= fname;
    this.bg= bg;
    this.city= city;
    this.country= country;
    this.pin= pin;

}
public String getFname() {
    return fname;
}
public void setFname(String fname) {
    this.fname = fname;
}
public String getLname() {
    return lname;
}
public void setLname(String lname) {
    this.lname= lname;
}
public String getDob() {
    return dob;
}
public void setDob(String dob) {
    this.dob= dob;
}
public String getEmail() {
    return email;
}
public void setEmail(String email) {
    this.email= email;
}
public String getNationality() {
    return nationality;
}
public void setNationality(String nationality) {
    this.nationality= nationality;
}
public String getReligion() {
    return religion;
}
public void setReligion(String religion) {
    this.religion= religion;
}
public String getBg() {
    return bg;
}
public void setBg(String bg) {
    this.bg= bg;
}
public String getCity() {
    return city;
}
public void setCity(String city) {
    this.city= city;
}
public String getState() {
    return state;
}
public void setState(String state) {
    this.state= state;
}
public String getCountry() {
    return country;
}
public void setCountry(String country) {
    this.country= country;
}
public String getPin() {
    return lname;
}
public void setPin(String pin) {
    this.pin= pin;
}


@Override
public String toString() {
    return "Profile [fname=" + fname + ", lname=" + lname + ",dob=" + dob + ",email=" + email + ",nationality=" + nationality + ",religion=" + religion + ",bg=" + bg+ ",city=" + city + ",state=" + state + ",country=" + country + ",pin=" + pin + "]";
}
public void save(Profile profile) {
}

}




