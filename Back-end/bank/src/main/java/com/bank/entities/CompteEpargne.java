package com.bank.entities;

import java.util.Date;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("CE")
public class CompteEpargne extends Compte{
	private double taux;

	public CompteEpargne() {
		super();
		this.setType("CE");
		// TODO Auto-generated constructor stub
	}

/*	public CompteEpargne( Date dateCreation, double solde, Client client) {
		super( dateCreation, solde, client);
		this.setType("CE");
		// TODO Auto-generated constructor stub
	}

	public CompteEpargne( Date dateCreation, double solde, Client client, double taux) {
		super(dateCreation, solde, client);
		this.setType("CE");
		this.taux = taux;
	}
*/
	public double getTaux() {
		return taux;
	}

	public void setTaux(double taux) {
		this.taux = taux;
	}

	public CompteEpargne(double taux) {
		super();
		this.taux = taux;
	}



	public CompteEpargne( Date dateCreation, double solde) {
		super( dateCreation, solde);
		// TODO Auto-generated constructor stub
	}

	public CompteEpargne(Date dateCreation, double solde, Client client,double taux) {
		super(dateCreation, solde, client);
		this.taux=taux;
		this.setType("CE");
		// TODO Auto-generated constructor stub
	}

	
	
	

}
