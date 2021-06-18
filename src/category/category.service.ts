import { Injectable } from "@nestjs/common";
import { CreateCategoryDto } from "./category.dto";

@Injectable()
export class CategoryService {
    private categories: CreateCategoryDto[] = [];

    addCategory(category: CreateCategoryDto) {
        this.categories.push(category);
    }

    loadCategories(): CreateCategoryDto[] {
        return this.categories;
    }
}