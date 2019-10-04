package com.bank.entities;

import java.io.Serializable;
import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;


@Entity
public class Client implements Serializable{
	@Id
	
	private String nom;
	
	private String password;
	private String role;
	
	//@OneToMany(mappedBy="client",fetch=FetchType.LAZY)
	//private Collection<Compte> comptes;
/*	public Client(String nom, String password, Collection<Compte> comptes) {
		super();
		this.nom = nom;
		this.password = password;
		this.comptes = comptes;
	}
*/
	
	public Client() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Client(String nom, String email) {
		super();
		this.nom = nom;
		this.password = email;
	}
	
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
/*	public Collection<Compte> getComptes() {
		return comptes;
	}
	public void setComptes(Collection<Compte> comptes) {
		this.comptes = comptes;
	}
*/
	public Client(String nom, String password, String role) {
		super();
		this.nom = nom;
		this.password = password;
		this.role = role;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}	


}

