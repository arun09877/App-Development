package com.example.spring.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.spring.auth.PropertyRequest;
import com.example.spring.model.Property;
import com.example.spring.repo.AgentRepository;
import com.example.spring.repo.PropertyRepository;

import java.util.List;
import java.util.Optional;

@Service
public class PropertyService {
    @Autowired
    private PropertyRepository propertyRepository;

    @Autowired
    private AgentRepository agentRepository;

    public Property saveProperty(PropertyRequest propertyRequest) {
        Property property = new Property();
        property.setName(propertyRequest.getName());
        property.setCity(propertyRequest.getCity());
        property.setState(propertyRequest.getState());
        property.setPrice(propertyRequest.getPrice());
        property.setBhk(propertyRequest.getBhk());
        property.setAgent(agentRepository.findById(propertyRequest.getAgentId()).orElse(null));
        return propertyRepository.save(property);
    }

    public List<Property> getAllProperties() {
        return propertyRepository.findAll();
    }

    public Optional<Property> getPropertyById(Long id) {
        return propertyRepository.findById(id);
    }

    public void deleteProperty(Long id) {
        propertyRepository.deleteById(id);
    }
}
