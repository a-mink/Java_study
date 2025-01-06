package com.example.spring.controller;

import com.example.spring.domain.Recipe;
import com.example.spring.service.RecipeService;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class RecipeController {

    @GetMapping("/recipes")
    public String showRecipes(Model model) {
        List<Recipe> recipes = RecipeService.getRecipes();
        model.addAttribute("recipes", recipes);
        return "main";  // Thymeleaf 템플릿 파일 (main.html)
    }

    // 레시피 번호로 검색하는 메서드
    @GetMapping("/recipes")
    public String searchRecipes(Model model, @RequestParam Integer search) {
        List<Recipe> recipes = RecipeService.getRecipesByNumber(search);

        model.addAttribute("recipes", recipes);
        model.addAttribute("recipeNumber", search);
        model.addAttribute("pageNumber", 1);  // 기본 페이지 1

        return "main";
    }

    // 특정 레시피 검색 (AJAX 요청)
    @GetMapping("/recipes")
    @ResponseBody
    public List<Recipe> searchRecipes(@RequestParam Integer search) {
        return RecipeService.getRecipesByNumber(search);
    }

    // 레시피 등록 페이지로 이동
    @GetMapping("/recipes/add")
    public String addRecipePage() {

        return "add_recipe_page";  // 레시피 등록 페이지 템플릿 (추가 필요)
    }

    @RequestMapping("/recipesJson")
    @ResponseBody
    public List<Recipe> getRecipesJson() {

        return RecipeService.getRecipes();
    }

    // 레시피 상세 페이지
    @GetMapping("/recipes/{id}")
    public String getRecipeDetail(@PathVariable Long id, Model model) {
        Recipe recipe = RecipeService.getRecipeById(id);
        model.addAttribute("recipe", recipe);
        return "detail_page";  // 상세 페이지 템플릿
    }
}
