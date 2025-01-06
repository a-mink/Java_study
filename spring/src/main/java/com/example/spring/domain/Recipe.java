package com.example.spring.domain;

public class Recipe {

    private Long id;
    private String name;
    private String type;
    private String thumbnail;

    // Constructor, Getter, Setter 추가

    public Recipe(Long id, String name, String type, String thumbnail) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.thumbnail = thumbnail;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getThumbnail() {
        return thumbnail;
    }

    public void setThumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
    }
}