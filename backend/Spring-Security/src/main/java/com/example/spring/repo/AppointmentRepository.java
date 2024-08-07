package com.example.spring.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.spring.model.Appointment;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
}
