package com.gestock.controller;

import com.gestock.model.Articulo;
import com.gestock.repository.ArticuloRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ArticuloController {

    private final ArticuloRepository repository;

    public ArticuloController(ArticuloRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/articulo")
    public List<Articulo> getArticulo() {
        return repository.findAll();
    }

    @PostMapping("/articulo")
    public Articulo crearArticulo(@RequestBody Articulo articulo) {
        return repository.save(articulo);
    }
}
