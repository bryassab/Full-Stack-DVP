package com.tickets.tickets.controllers;

import com.tickets.tickets.models.Ticket;
import com.tickets.tickets.repositories.ticketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;


import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/tickets")
@CrossOrigin(origins = "*")
public class ticketController {

    @Autowired
    ticketRepository data;

    @GetMapping("/all")
    public List<Ticket> getAll() {
        return (List<Ticket>) data.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Ticket> searchForId(@PathVariable Integer id) {
        return data.findById(id);
    }

    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Ticket save(@RequestBody Ticket ticket){
        return data.save(ticket);
    }

    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public Ticket update(@RequestBody Ticket ticket){
        ticket.setUpdateAt(new Date());
        return data.save(ticket);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Integer id) {
        data.deleteById(id);
    }
}
