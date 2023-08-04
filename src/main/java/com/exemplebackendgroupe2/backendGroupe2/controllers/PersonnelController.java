package com.exemplebackendgroupe2.backendGroupe2.controllers;

import com.exemplebackendgroupe2.backendGroupe2.models.Personnel;
import com.exemplebackendgroupe2.backendGroupe2.responses.Message;
import com.exemplebackendgroupe2.backendGroupe2.services.PersonnelServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PersonnelController {

    @Autowired
    private PersonnelServices personnelServices;

    @PostMapping("/ajouterPersonnel")
    public Message ajouterPersonnel(@RequestBody Personnel personnel)
    {
        return personnelServices.ajouterpersonnel(personnel);
    }
    @GetMapping("/afficherpersonnels")
    public List<Personnel> afficherpersonnels()
    {
        return personnelServices.afficherpersonnels();
    }
    @GetMapping("/afficherpersonnelavecId/{id}")
    public Personnel afficherpersonnelavecId(@PathVariable int id)
    {
        return personnelServices.afficherpersonnelavecid(id);
    }
    @DeleteMapping("/supprimerpersonnel/{id}")
    public Message supprimerpersonnel(@PathVariable int id)
    {
        return  personnelServices.supprimerpersonnel(id);
    }
    @PutMapping("/modifierpersonnel")
    public Message modifierpersonnel(@RequestBody Personnel personnel)
    {
        return personnelServices.modifierpersonnel(personnel);
    }
}
