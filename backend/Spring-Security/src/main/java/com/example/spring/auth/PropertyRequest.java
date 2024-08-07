package com.example.spring.auth;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PropertyRequest {
    private String name;
    private String city;
    private String state;
    private double price;
    private int bhk;
    
    private Long agentId;
}
