package com.bank.web;

import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


import com.bank.dao.OperationRepository;
import com.bank.entities.Operation;
import com.bank.metier.IBanqueMetier;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class OperationRestService {

	@Autowired
	private OperationRepository operationRepository;
	@Autowired
	private IBanqueMetier iBanqueMetier;
	
	@RequestMapping(value="/operations/{codeCompte}",method=RequestMethod.GET)
	public java.util.List<Operation> getOperations(@PathVariable Long codeCompte){
		return operationRepository.operationsParCode(codeCompte);
	}
	@RequestMapping(value="/comptesVers/{codeCompte}/{montant}",method=RequestMethod.POST)
	public void verser(@PathVariable Long codeCompte,@PathVariable double montant)
	{
		iBanqueMetier.verser(codeCompte, montant);
	}
	@RequestMapping(value="/comptesRet/{codeCompte}/{montant}",method=RequestMethod.POST)
	public void retirer(@PathVariable Long codeCompte,@PathVariable double montant)
	{
		iBanqueMetier.retirer(codeCompte, montant);
	}
	@RequestMapping(value="/comptesVir/{codeCompte}/{montant}/{codeCompte2}",method=RequestMethod.POST)
	public void retirer(@PathVariable Long codeCompte,@PathVariable Long codeCompte2,@PathVariable double montant)
	{
		iBanqueMetier.virement(codeCompte,codeCompte2, montant);
	}
}
