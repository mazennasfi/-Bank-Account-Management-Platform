package com.bank.metier;

import java.util.Date;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.bank.dao.CompteRepository;
import com.bank.dao.OperationRepository;
import com.bank.entities.Compte;
import com.bank.entities.CompteCourant;
import com.bank.entities.Operation;
import com.bank.entities.Retrait;
import com.bank.entities.Versement;

@Service
@Transactional
public class BanqueMetier implements IBanqueMetier {
	@Autowired
	private CompteRepository compteRepository;
	@Autowired
	private OperationRepository operationRepository;

	@Override
	public Compte consulterCompte(Long codeCompte) {
	
		
		Compte c=compteRepository.compteParCode(codeCompte);
		if(c==null) throw new RuntimeException("Ce compte nexiste pas");
		return c;
	}

	@Override
	public void verser(Long codeCompte, double montant) {
		
		
		Compte c=consulterCompte(codeCompte);
		Versement v= new Versement(new Date(), montant, c);
		operationRepository.save(v);
		c.setSolde(c.getSolde()+ montant);
		compteRepository.save(c);
		
	}

	@Override
	public void retirer(Long codeCompte, double montant) {

		Compte c=consulterCompte(codeCompte);
		double facilitesCaisse=0;
		if(c instanceof CompteCourant)
			facilitesCaisse= ((CompteCourant)c).getDecouvert();
		if(facilitesCaisse+c.getSolde()<montant)
			throw new RuntimeException("Votre solde est insuffisant!");
		Retrait r= new Retrait(new Date(), montant, c);
		operationRepository.save(r);
		c.setSolde(c.getSolde()- montant);
		compteRepository.save(c);
		
	}

	@Override
	public void virement(Long codeCompte1, Long codeCompte2, double montant) {
		retirer(codeCompte1, montant);
		verser(codeCompte2, montant);
	}

	@Override
	public List<Operation> listeOperations(Long codeCompte) {
		
		return operationRepository.operationsParCode(codeCompte);
	}

}
