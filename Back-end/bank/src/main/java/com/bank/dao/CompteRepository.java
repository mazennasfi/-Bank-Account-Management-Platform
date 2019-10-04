package com.bank.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;



import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.bank.entities.Compte;


public interface CompteRepository extends JpaRepository<Compte, Long> {
	@Query("select c FROM Compte c where c.codeCompte = :x")
	public Compte compteParCode(@Param("x")Long codeCompte);
	
	@Query("select c FROM Compte c where c.client.nom = :x")
	public List<Compte> comptesParUsername(@Param("x")String nom);


}

