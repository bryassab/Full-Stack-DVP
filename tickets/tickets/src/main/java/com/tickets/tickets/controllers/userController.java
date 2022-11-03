package com.tickets.tickets.controllers;

import com.tickets.tickets.models.User;
import com.tickets.tickets.repositories.userRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "*")
public class userController {

    @Autowired
    userRepository data;

    @GetMapping("/all")
    public List<User> getAll() {
        return (List<User>) data.findAll();
    }

    @GetMapping("/{id}")
    public Optional<User> searchForId(@PathVariable Integer id) {
        return data.findById(id);
    }

    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public User save(@RequestBody User user){
        return data.save(user);
    }

    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public User update(@RequestBody User user){
        return data.save(user);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Integer id) {
        data.deleteById(id);
    }
}
