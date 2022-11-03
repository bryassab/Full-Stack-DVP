package com.tickets.tickets.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String lastName;
    private String email;
    @OneToMany(cascade = {CascadeType.PERSIST}, mappedBy = "user")
    @JsonIgnoreProperties("user")
    private List<Ticket> tickets;
}
