package com.example.spring.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.spring.model.Agent;

public interface AgentRepository extends JpaRepository<Agent, Long> {
}
