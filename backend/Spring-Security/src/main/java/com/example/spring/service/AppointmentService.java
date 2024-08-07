package com.example.spring.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.spring.auth.AppointmentRequest;
import com.example.spring.model.Appointment;
import com.example.spring.repo.AgentRepository;
import com.example.spring.repo.AppointmentRepository;
import com.example.spring.repo.PropertyRepository;

import java.util.List;
import java.util.Optional;

@Service
public class AppointmentService {
    @Autowired
    private AppointmentRepository appointmentRepository;

    @Autowired
    private PropertyRepository propertyRepository;

    @Autowired
    private AgentRepository agentRepository;

    public Appointment saveAppointment(AppointmentRequest appointmentRequest) {
        Appointment appointment = new Appointment();
        appointment.setAppointmentDate(appointmentRequest.getAppointmentDate());
        appointment.setDetails(appointmentRequest.getDetails());
        appointment.setProperty(propertyRepository.findById(appointmentRequest.getPropertyId()).orElse(null));
        appointment.setAgent(agentRepository.findById(appointmentRequest.getAgentId()).orElse(null));
        return appointmentRepository.save(appointment);
    }

    public List<Appointment> getAllAppointments() {
        return appointmentRepository.findAll();
    }

    public Optional<Appointment> getAppointmentById(Long id) {
        return appointmentRepository.findById(id);
    }

    public void deleteAppointment(Long id) {
        appointmentRepository.deleteById(id);
    }
}
