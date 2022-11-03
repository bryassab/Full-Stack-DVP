package com.tickets.tickets.repositories;

import com.tickets.tickets.models.Ticket;
import org.springframework.data.repository.CrudRepository;


public interface ticketRepository extends CrudRepository<Ticket, Integer> {
}
