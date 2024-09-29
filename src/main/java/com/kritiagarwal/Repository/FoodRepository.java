package com.kritiagarwal.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kritiagarwal.Entity.Food;
@Repository
public interface FoodRepository extends JpaRepository<Food, String>{

}
