package com.tickets.tickets.services;

import com.tickets.tickets.models.Ticket;
import com.tickets.tickets.repositories.ticketRepository;
import org.springframework.beans.factory.annotation.Autowired;


import java.util.List;
import java.util.Optional;

public class ticketServices {

    @Autowired
    private ticketRepository data;

    public List<Ticket> findAll(){
        return (List<Ticket>) data.findAll();
    }

    public Optional<Ticket> findById(int id){
        return data.findById(id);
    }

    public Ticket save(Ticket ticket){
        return data.save(ticket);
    }

    public void deleteById(int id){
        data.deleteById(id);
    }
}
