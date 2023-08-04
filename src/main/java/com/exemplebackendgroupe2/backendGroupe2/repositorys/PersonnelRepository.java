package com.exemplebackendgroupe2.backendGroupe2.repositorys;

import com.exemplebackendgroupe2.backendGroupe2.models.Personnel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface PersonnelRepository extends JpaRepository<Personnel, Integer> {
    //methode 1
  /* Optional<Personnel> findPersonnelByEmail(String email);*/

    //methode 2
    /*SELECT * FROM personnel WHERE email = "CHIHEB@GMAIL.COM";*/
    // @Query("SELECT p FROM Personnel p WHERE p.email = ?1")
    @Query(value = "SELECT * FROM personnel WHERE email = :asma ",nativeQuery = true)
    Optional<Personnel> hetpersonnelbelemail (@Param("asma") String email);


    @Query(value = "SELECT * from personnel",nativeQuery = true)
    List<Personnel> afficherpersonnels();
}
