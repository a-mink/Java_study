package com.example.spring.service;

import com.example.spring.domain.Recipe;

import java.util.ArrayList;
import java.util.stream.Collectors;
import java.util.List;

public class RecipeService {

    public static List<Recipe> getRecipes() {
        List<Recipe> recipes = new ArrayList<>();
        return recipes;
    }

    // 레시피 번호로 검색
    public List<Recipe> getRecipesByNumber(int search) {
        List<Recipe> recipes = new ArrayList<>();
        return recipes.stream()
                .filter(recipe -> recipe.getId() == search)
                .collect(Collectors.toList());
    }

    // 특정 레시피 가져오기
    public Recipe getRecipeById(Long id) {
        List<Recipe> recipes = new ArrayList<>();
        return recipes.stream()
                .filter(recipe -> recipe.getId().equals(id))
                .findFirst()
                .orElse(null);
    }
}