package net.javaguides.springboot.controller;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Employee;
import net.javaguides.springboot.model.Kimlik;
import net.javaguides.springboot.repository.EmployeeRepository;
import net.javaguides.springboot.repository.KimlikRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class KimlikController {

    @Autowired
    private KimlikRepository kimlikRepository;

    @PostMapping("/kimlik")
    public Kimlik createKimlik(@RequestBody Kimlik kimlik){

        return  kimlikRepository.save(kimlik);
    }



}
