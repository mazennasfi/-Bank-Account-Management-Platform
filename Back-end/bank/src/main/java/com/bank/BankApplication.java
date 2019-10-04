package com.bank;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.bank.dao.ClientRepository;
//import com.bank.dao.ClientRepository;
import com.bank.dao.CompteRepository;
import com.bank.dao.OperationRepository;
import com.bank.dao.OperationRepository;
import com.bank.entities.Client;
//import com.bank.entities.Client;
import com.bank.entities.Compte;
import com.bank.entities.CompteCourant;
import com.bank.entities.CompteEpargne;
import com.bank.entities.Operation;
//import com.bank.entities.CompteCourant;
import com.bank.metier.IBanqueMetier;
import com.bank.metier.ICompteMetier;

@SpringBootApplication
public class BankApplication implements CommandLineRunner {

	@Autowired
	public ClientRepository clientRepository;
	@Autowired
	public CompteRepository compteRepository;
	@Autowired
	public OperationRepository operationRepository;
	@Autowired
	public ICompteMetier iCompteMetier;
	public static void main(String[] args) {
		SpringApplication.run(BankApplication.class, args);
		
		
		
	}
	@Override
	public void run(String... args) throws Exception {
//		 List<Compte> ops=null;
//		 Operation op1=new Operation(new Date(), 230);
		 Client c1=new Client("mazen", "mazen","agent");
//		 operationRepository.save(op1);
//		 operationRepository.deleteAll();
//	 Compte cc =new CompteCourant(new Date(), 500, c1,100);
//		 cc.setType("CC");
	
//		 cc.setClient(c1);
//		 compteRepository.deleteAll();
 //compteRepository.save(cc);
/*		 Collection<Compte> list=new ArrayList<Compte>();
		 
		
		 list.add(cc);
		 c1.setComptes(list);
*/		 
	//	 clientRepository.save(c1);
		 
		 
//		 
		// Operation op1=new Operation(new Date(), 230,cc);
		// operationRepository.save(op1);
		 
//		 ops.add(cc);
		// TODO Auto-generated method stub
		
		
		
//		clientRepository.save(c1);
//		
//		Client cl=clientRepository.clientParNom("Baraket");
//		iCompteMetier.creerCompteEpargne("c5",  cl.getNom(), 100,100);
//		System.out.printf("c'est:  = %s\n qui zst %s ", cl.getNom(),cl.getRole());
	
	/* List<Client> clients=clientRepository.listerClients("client");
	 for (int i=0;i<clients.size();i++) {
		 System.out.printf("c'est:  = %s\n ",clients.get(i).getNom());
	 }*/
	}


}
