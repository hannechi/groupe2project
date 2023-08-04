package com.exemplebackendgroupe2.backendGroupe2.models;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.Period;

@Entity
public class Personnel {

    @Id
    @GeneratedValue
    private Integer id;
    private String nom;
    private String prenom;
    private String email;
    @Transient
    private Integer age;
    private LocalDate datedenaissance;
    private Double salaire;

    public Personnel(Integer id, String nom, String prenom, String email, LocalDate datedenaissance, Double salaire) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.datedenaissance = datedenaissance;
        this.salaire = salaire;
    }

    public Personnel() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Integer getAge() {
        return Period.between(this.datedenaissance,LocalDate.now()).getYears();
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public LocalDate getDatedenaissance() {
        return datedenaissance;
    }

    @Override
    public String toString() {
        return "Personnel{" +
                "id=" + id +
                ", nom='" + nom + '\'' +
                ", prenom='" + prenom + '\'' +
                ", email='" + email + '\'' +
                ", age=" + age +
                ", datedenaissance=" + datedenaissance +
                ", salaire=" + salaire +
                '}';
    }

    public void setDatedenaissance(LocalDate datedenaissance) {
        this.datedenaissance = datedenaissance;
    }

    public Double getSalaire() {
        return salaire;
    }

    public void setSalaire(Double salaire) {
        this.salaire = salaire;
    }
}
