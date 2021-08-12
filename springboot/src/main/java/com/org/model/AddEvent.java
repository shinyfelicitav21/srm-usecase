package com.org.model;
import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

@Entity
@Table (name="addevent")
public class AddEvent
{
@Id 
@GeneratedValue(strategy = GenerationType.AUTO)
private int id;
@Column
public  String event;

public AddEvent() {
}
public AddEvent(String event) {
    this.event = event;
  
}
public String getEvent() {
    return event;
}
public void setEvent(String event) {
    this.event = event;
}

@Override
public String toString() {
    return "AddEvent [ event=" + event + "]";
}

}




