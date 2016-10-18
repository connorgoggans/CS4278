package org.jhipster.com.repository;

import org.jhipster.com.domain.Dormitory;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the Dormitory entity.
 */
@SuppressWarnings("unused")
public interface DormitoryRepository extends JpaRepository<Dormitory,Long> {

}
