package com.gestock.controller;

import com.gestock.model.Producto;
import com.gestock.repository.ProductoRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ProductoController {

    private final ProductoRepository repository;

    public ProductoController(ProductoRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/productos")
    public List<Producto> getProductos() {
        return repository.findAll();
    }

    @PostMapping("/productos")
    public Producto crearProducto(@RequestBody Producto producto) {
        return repository.save(producto);
    }
}
