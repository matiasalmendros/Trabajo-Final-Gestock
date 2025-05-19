package com.gestock.model;

import jakarta.persistence.*;

@Entity
public class Producto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;

    public Producto() {}

    public Producto(String nombre) {
        this.nombre = nombre;
    }

    public Long getId() { return id; }

    public String getNombre() { return nombre; }

    public void setNombre(String nombre) { this.nombre = nombre; }
}
