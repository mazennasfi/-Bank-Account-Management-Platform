package com.bank.web;


import java.util.Date;


import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.bank.dao.ClientRepository;
import com.bank.dao.CompteRepository;
import com.bank.entities.Client;
import com.bank.entities.Compte;
import com.bank.entities.CompteCourant;
import com.bank.entities.CompteEpargne;
import com.bank.metier.ICompteMetier;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class CompteRestService {
	@Autowired
	private CompteRepository compteRepository;
	@Autowired
	private ClientRepository clientRepository;
	@Autowired
	private ICompteMetier icompteMetier;
	@RequestMapping(value="/{name}/compte/{solde}/courant/{decouvert}",method=RequestMethod.POST)
	public void creerCompteCourant(@PathVariable String name,@PathVariable double solde,@PathVariable double decouvert)
	{
		icompteMetier.creerCompteCourant(name, solde, decouvert);
	/*	Client cl=clientRepository.clientParNom(name);
		Compte c=new CompteCourant(new Date(), solde,cl,decouvert);
		compteRepository.save(c);*/
	}
	@RequestMapping(value="/{name}/compte/{solde}/epargne/{taux}",method=RequestMethod.POST)
	public void creerCompteEpargne(@PathVariable String name,@PathVariable double solde,@PathVariable double taux)
	{
		
		icompteMetier.creerCompteEpargne(name,solde, taux);
		/*Client cl=clientRepository.clientParNom(name);
		Compte c=new CompteEpargne(new Date(), solde, cl,taux);
		compteRepository.save(c);*/
	}
	
	@RequestMapping(value="/comptes/{name}",method=RequestMethod.GET)
	public java.util.List<Compte> getComptes(@PathVariable String name){
		return compteRepository.comptesParUsername(name);
	}
/*	@RequestMapping(value="/comptesVir/{codeCompte}/{montant}/{codeCompte2}",method=RequestMethod.POST)
	public void retirer(@PathVariable String codeCompte,@PathVariable String codeCompte2,@PathVariable double montant)
	{
		iBanqueMetier.virement(codeCompte,codeCompte2, montant);
	}
	
*/
	
}
