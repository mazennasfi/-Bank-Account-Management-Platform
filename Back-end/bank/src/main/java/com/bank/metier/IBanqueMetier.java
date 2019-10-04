package com.bank.metier;

import java.util.List;

import org.springframework.data.domain.Page;



import com.bank.entities.Compte;
import com.bank.entities.Operation;

public interface IBanqueMetier {

	public Compte consulterCompte(Long codeCompte);
	public void verser(Long codeCompte,double montant);
	public void retirer(Long codeCompte,double montant);
	public void virement(Long codeCompte1, Long codeCompte2,double montant);
	public List<Operation> listeOperations(Long codeCompte);
	
}
