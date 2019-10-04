package com.bank.metier;

import java.util.List;

import com.bank.entities.Compte;

public interface ICompteMetier {
	public List<Compte> comptesParClient(String codeClient);
	public void creerCompteCourant(String codeClient,double solde,double decouvert);
	public void creerCompteEpargne(String codeClient,double solde,double taux);

}
