package edu.vanderbilt.spring;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Video {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private String name;
	
	private int size;
	
	private String genre;
	
	private String URL;
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	
	public String getName(){
		return name;
	}
	
	public int getSize(){
		return size;
	}
	
	public String getGenre(){
		return genre;
	}
	
	public String getURL(){
		return URL;
	}
	
	public void setName(String name){
		this.name = name;
	}
	
	public void setSize(int size){
		this.size = size;
	}
	
	public void setGenre(String genre){
		this.genre = genre;
	}
	
	public void setURL(String URL){
		this.URL = URL;
	}

}
