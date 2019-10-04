package com.bank.metier;

import java.util.Date;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.bank.dao.ClientRepository;
import com.bank.dao.CompteRepository;
import com.bank.entities.Client;
import com.bank.entities.Compte;
import com.bank.entities.CompteCourant;
import com.bank.entities.CompteEpargne;

@Service
@Transactional
public class CompteMetier implements ICompteMetier {
	@Autowired
	private CompteRepository compteRepository;
	@Autowired
	private ClientRepository clientRepository;
	
	@Override
	public List<Compte> comptesParClient(String codeClient){
		return compteRepository.comptesParUsername(codeClient);
	}
	@Override
	public void creerCompteCourant(String codeClient,double solde,double decouvert) {
		List<Compte> comptes= comptesParClient(codeClient);
		int i=0;
		for(int k=0;k<comptes.size();k++)
		{
			if(comptes.get(k).getType().equals("CC") ) 
			{
				i=i+1;
				
			}
		}
		if(i<1)
		{
			Client cl=clientRepository.clientParNom(codeClient);
			Compte c=new CompteCourant(new Date(), solde, cl,decouvert);
			compteRepository.save(c);
			
		}
		
		
	}
	@Override
	public void creerCompteEpargne(String codeClient,double solde,double taux) {
		List<Compte> comptes= comptesParClient(codeClient);
		int i=0;
		for(int k=0;k<comptes.size();k++)
		{
			if(comptes.get(k).getType().equals("CE") ) 
			{
				i=i+1;
				
			}
		}
		if(i<1)
		{
			Client cl=clientRepository.clientParNom(codeClient);
			Compte c=new CompteEpargne(new Date(), solde, cl,taux);
			compteRepository.save(c);
			
		}
		
		
	}

}
