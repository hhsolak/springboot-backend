package net.javaguides.springboot.repository;

import net.javaguides.springboot.model.Kimlik;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface KimlikRepository extends JpaRepository<Kimlik, Long> {

}
