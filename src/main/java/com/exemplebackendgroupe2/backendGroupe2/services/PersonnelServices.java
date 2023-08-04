package com.exemplebackendgroupe2.backendGroupe2.services;

import com.exemplebackendgroupe2.backendGroupe2.models.Personnel;
import com.exemplebackendgroupe2.backendGroupe2.repositorys.PersonnelRepository;
import com.exemplebackendgroupe2.backendGroupe2.responses.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PersonnelServices {

    @Autowired
    private PersonnelRepository personnelRepository;


    public Message ajouterpersonnel(Personnel personnel) {
        Personnel p = personnelRepository.hetpersonnelbelemail(personnel.getEmail()).orElse(null);
        if (p == null) {
            personnelRepository.save(personnel);
            return new Message("Personnel est ajouté avec succés!");
        }
        else
        {
            throw new IllegalStateException("Email taken");
        }
    }

    public List<Personnel> afficherpersonnels() {

        /*return personnelRepository.afficherpersonnels();*/
        return personnelRepository.findAll();
    }

    public Personnel afficherpersonnelavecid(int id) {
        Personnel p = personnelRepository.findById(id).orElse(null);
        if(p==null)
        {
            throw new IllegalStateException("Personnel dosent exist ! ");
        }
        return p;
    }

    public Message supprimerpersonnel(int id) {
       Optional<Personnel> p = personnelRepository.findById(id);
       if(p.isPresent()==false)
       {
           throw new IllegalStateException("Personnel dosent exist ! ");

       }
        personnelRepository.deleteById(id);
        Message m = new Message("Personnel est supprimé avec succés!");
        return m;

    }

    public Message modifierpersonnel(Personnel personnel) {
        Personnel p = personnelRepository.findById(personnel.getId()).orElse(null);
        if (p==null)
        {
            throw new IllegalStateException("Personnel dosent exist ! ");
        }
        else
        {
            Personnel pavecemail = personnelRepository.hetpersonnelbelemail(personnel.getEmail()).orElse(null);
            if(pavecemail!=null && pavecemail.getId()!=p.getId())
            {
                throw new IllegalStateException("Email taken !");
            }
            else
            {
                p.setDatedenaissance(personnel.getDatedenaissance());
                p.setEmail(personnel.getEmail());
                p.setNom(personnel.getNom());
                p.setPrenom(personnel.getPrenom());
                p.setSalaire(personnel.getSalaire());
                personnelRepository.save(p);
                return new Message("Personnel est modifié avec succés!");
            }
        }
    }
}
