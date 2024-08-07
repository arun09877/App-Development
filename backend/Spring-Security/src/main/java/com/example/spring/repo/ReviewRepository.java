package com.example.spring.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.spring.model.Review;

public interface ReviewRepository extends JpaRepository<Review, Long> {
}
