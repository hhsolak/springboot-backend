package net.javaguides.springboot.model;


import javax.persistence.*;

@Entity
@Table(name = "tabloKimlik")
public class Kimlik {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "adi")
    private String adi;
    @Column(name = "soyadi")
    private String soyadi;
    @Column(name = "emailId")
    private String emailId;
    @Column(name = "telno")
    private String telno;
    @Column(name = "babaadi")
    private String babaadi;
    @Column(name = "anneadi")
    private String anneadi;

    public Kimlik() {
    }

    public Kimlik(String adi, String soyadi, String emailId, String telno, String babaadi, String anneadi) {
        super();
        this.adi = adi;
        this.soyadi = soyadi;
        this.emailId = emailId;
        this.telno = telno;
        this.babaadi = babaadi;
        this.anneadi = anneadi;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getAdi() {
        return adi;
    }

    public void setAdi(String adi) {
        this.adi = adi;
    }

    public String getSoyadi() {
        return soyadi;
    }

    public void setSoyadi(String soyadi) {
        this.soyadi = soyadi;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public String getTelno() {
        return telno;
    }

    public void setTelno(String telno) {
        this.telno = telno;
    }

    public String getBabaadi() {
        return babaadi;
    }

    public void setBabaadi(String babaadi) {
        this.babaadi = babaadi;
    }

    public String getAnneadi() {
        return anneadi;
    }

    public void setAnneadi(String anneadi) {
        this.anneadi = anneadi;
    }
}
