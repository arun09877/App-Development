package com.example.spring.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.spring.model.Property;

public interface PropertyRepository extends JpaRepository<Property, Long> {
}
