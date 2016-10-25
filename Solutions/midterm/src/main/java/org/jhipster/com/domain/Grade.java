package org.jhipster.com.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.io.Serializable;
import java.util.Objects;

/**
 * A Grade.
 */
@Entity
@Table(name = "grade")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Grade implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotNull
    @Column(name = "score", nullable = false)
    private Double score;

    @OneToOne
    @JoinColumn(unique = true)
    private Submission grade;

    @ManyToOne
    private Instructor grader;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Double getScore() {
        return score;
    }

    public Grade score(Double score) {
        this.score = score;
        return this;
    }

    public void setScore(Double score) {
        this.score = score;
    }

    public Submission getGrade() {
        return grade;
    }

    public Grade grade(Submission submission) {
        this.grade = submission;
        return this;
    }

    public void setGrade(Submission submission) {
        this.grade = submission;
    }

    public Instructor getGrader() {
        return grader;
    }

    public Grade grader(Instructor instructor) {
        this.grader = instructor;
        return this;
    }

    public void setGrader(Instructor instructor) {
        this.grader = instructor;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Grade grade = (Grade) o;
        if(grade.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, grade.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "Grade{" +
            "id=" + id +
            ", score='" + score + "'" +
            '}';
    }
}
