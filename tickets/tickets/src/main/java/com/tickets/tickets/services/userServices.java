package com.tickets.tickets.services;

import com.tickets.tickets.models.User;
import com.tickets.tickets.repositories.userRepository;
import org.springframework.beans.factory.annotation.Autowired;


import java.util.List;
import java.util.Optional;

public class userServices {

    @Autowired
    private userRepository data;

    public List<User> findAll(){
        return (List<User>) data.findAll();
    }

    public Optional<User> findById(int id){
        return data.findById(id);
    }

    public User save(User user){
        return data.save(user);
    }

    public void deleteById(int id){
        data.deleteById(id);
    }
}
