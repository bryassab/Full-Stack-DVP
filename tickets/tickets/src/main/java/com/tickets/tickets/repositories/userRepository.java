package com.tickets.tickets.repositories;

import com.tickets.tickets.models.User;
import org.springframework.data.repository.CrudRepository;


public interface userRepository extends CrudRepository<User, Integer> {
}
