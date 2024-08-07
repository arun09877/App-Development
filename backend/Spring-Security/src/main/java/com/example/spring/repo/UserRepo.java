package com.example.spring.repo;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.spring.model.User;

public interface UserRepo extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}