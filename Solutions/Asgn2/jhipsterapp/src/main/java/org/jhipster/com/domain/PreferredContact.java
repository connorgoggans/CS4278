package org.jhipster.com.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.io.Serializable;
import java.util.Objects;

/**
 * A PreferredContact.
 */
@Entity
@Table(name = "preferred_contact")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class PreferredContact implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotNull
    @Column(name = "name_of_choice", nullable = false)
    private String nameOfChoice;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNameOfChoice() {
        return nameOfChoice;
    }

    public PreferredContact nameOfChoice(String nameOfChoice) {
        this.nameOfChoice = nameOfChoice;
        return this;
    }

    public void setNameOfChoice(String nameOfChoice) {
        this.nameOfChoice = nameOfChoice;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        PreferredContact preferredContact = (PreferredContact) o;
        if(preferredContact.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, preferredContact.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "PreferredContact{" +
            "id=" + id +
            ", nameOfChoice='" + nameOfChoice + "'" +
            '}';
    }
}
