package com.bank.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.bank.dao.ClientRepository;
import com.bank.entities.Client;


@CrossOrigin(origins="http://localhost:4200")
@RestController
public class ClientRestService {
	@Autowired
	private ClientRepository clientRepository;
	
	@RequestMapping(value="/clients/{name}",method=RequestMethod.GET)
	public Client getClient(@PathVariable String name){
		return clientRepository.clientParNom(name);
	}
	@RequestMapping(value="/lesClients",method=RequestMethod.GET)
	public java.util.List<Client> listerClient(){
		return clientRepository.listerClients("client");
	}
	
	
	

}
