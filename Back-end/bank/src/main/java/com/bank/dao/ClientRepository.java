package com.bank.dao;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.bank.entities.Client;


public interface ClientRepository extends JpaRepository<Client, Long>{
	@Query("select c FROM Client c where c.nom = :x")
	public Client clientParNom(@Param("x")String nom);
	
	@Query("select c FROM Client c where c.role = :x")
	public List<Client> listerClients(@Param("x")String role);

}
