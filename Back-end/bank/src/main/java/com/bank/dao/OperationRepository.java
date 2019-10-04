package com.bank.dao;

import java.util.List;


import org.springframework.data.domain.Page;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


import com.bank.entities.Operation;

public interface OperationRepository extends JpaRepository<Operation, Long>{

	@Query("select o FROM Operation o where o.compte.codeCompte = :x order by dateOperation desc")
	public List<Operation> operationsParCode(@Param("x")Long codeCompte);

}
