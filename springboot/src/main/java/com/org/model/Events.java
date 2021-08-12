package com.org.model;
import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

@Entity
@Table (name="events")
public class Events
{
@Id 
@GeneratedValue(strategy = GenerationType.AUTO)
private int id;
@Column
public  String ehistory;

public Events() {
}
public Events(String ehistory) {
    this.ehistory = ehistory;
  
}
public String getEvents() {
    return ehistory;
}
public void setEvent(String ehistory) {
    this.ehistory = ehistory;
}

@Override
public String toString() {
    return "Events [ ehistory=" + ehistory + "]";
}

}




