package com.gestock.model;

import jakarta.persistence.*;


@Entity
public class Articulo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long codigo_articulo;

    private String descripcion_articulo;

    public Articulo() {}

    public Long getCodigo_articulo() {
        return codigo_articulo;
    }

    public void setCodigo_articulo(Long codigo_articulo) {
        this.codigo_articulo = codigo_articulo;
    }

    public String getDescripcion_articulo() {
        return descripcion_articulo;
    }

    public void setDescripcion_articulo(String descripcion_articulo) {
        this.descripcion_articulo = descripcion_articulo;
    }
}

