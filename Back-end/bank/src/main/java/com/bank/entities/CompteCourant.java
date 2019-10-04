package com.bank.entities;

import java.util.Date;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("CC")
public class CompteCourant extends Compte{
	private double decouvert;
	
	public CompteCourant( Date dateCreation, double solde) {
		super( dateCreation, solde);
		this.setType("CC");
		// TODO Auto-generated constructor stub
	}

	public CompteCourant() {
		super();
		this.setType("CC");
		
		// TODO Auto-generated constructor stub
	}

	public CompteCourant( Date dateCreation, double solde, Client client) {
		super( dateCreation, solde, client);
		this.setType("CC");
		// TODO Auto-generated constructor stub
	}

	public CompteCourant(double decouvert) {
		super();
		this.decouvert = decouvert;
		this.setType("CC");
	}

	public double getDecouvert() {
		return decouvert;
	}

	public void setDecouvert(double decouvert) {
		this.decouvert = decouvert;
	}

	public CompteCourant(Date dateCreation, double solde, Client client,double decouvert) {
		super(dateCreation, solde, client);
		this.decouvert=decouvert;
		this.setType("CC");
		// TODO Auto-generated constructor stub
	}

/*	public CompteCourant( Date dateCreation, double solde, Client client, double decouvert) {
		super( dateCreation, solde, client);
		this.decouvert = decouvert;
		
	}

	public CompteCourant(Client client) {
		super(client);
		this.setType("CC");
		// TODO Auto-generated constructor stub
	}

*/	
	
	
	
	

}

