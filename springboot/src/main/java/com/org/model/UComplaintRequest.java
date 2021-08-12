
package com.org.model;
import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

@Entity
@Table (name="complaint")
public class UComplaintRequest
{
@Id 
@GeneratedValue(strategy = GenerationType.AUTO)
private int id;
@Column
public String subject;
@Column
public  String request;
@Column
public String duration;

public UComplaintRequest() {
}

public UComplaintRequest(String subject, String request, String duration) {
    this.subject = subject;
    this.request = request;
    this.duration = duration;
}

public String getSubject() {
    return subject;
}

public void setSubject(String subject) {
    this.subject = subject;
}

public String getRequest() {
    return request;
}

public void setRequest(String request) {
    this.request = request;
}

public String getDuration() {
    return duration;
}

public void setDuration(String duration) {
    this.duration = duration;
}

@Override
public String toString() {
    return "UComplaintRequest [duration=" + duration + ", request=" + request + ", subject=" + subject + "]";
}


}



