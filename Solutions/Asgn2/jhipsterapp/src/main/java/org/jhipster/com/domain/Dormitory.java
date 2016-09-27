package org.jhipster.com.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.io.Serializable;
import java.util.Objects;

/**
 * A Dormitory.
 */
@Entity
@Table(name = "dormitory")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Dormitory implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotNull
    @Column(name = "dorm_name", nullable = false)
    private String dormName;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDormName() {
        return dormName;
    }

    public Dormitory dormName(String dormName) {
        this.dormName = dormName;
        return this;
    }

    public void setDormName(String dormName) {
        this.dormName = dormName;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Dormitory dormitory = (Dormitory) o;
        if(dormitory.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, dormitory.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "Dormitory{" +
            "id=" + id +
            ", dormName='" + dormName + "'" +
            '}';
    }
}
