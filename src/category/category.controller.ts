import { Body, Controller, Get, Header, HttpCode, Ip, Param, Post, Redirect, Req } from '@nestjs/common';
import { Request } from 'express';
import { CreateCategoryDto } from './category.dto';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {

    constructor(private categoryService: CategoryService) {}

    @Get()
    loadAllCategories(): CreateCategoryDto[] {
        return this.categoryService.loadCategories();
    }

    @Get('req-test')
    getRequestData(@Req() request: Request, @Ip() ip: any): string {
        return `Du rufst gerade folgenden Pfad auf: ${request.url} und die IP ist ${ip}`;
    }

    @Get('all')
    @Redirect('https://spartakiade.org', 302)
    getAll() {
        return 'redirect';
    }

    @Get(':id')
    @Header('Cache-Control', 'none')
    async getCategoryByUrlParameter(@Param('id') id: number): Promise<string> {
        return `Die Kategorie ${id}`;
    }

    /*
    @Get(':id')
    @Header('Cache-Control', 'none')
    getCategoryByUrlParameter(@Param('id') id: number): Observable<string> {
        return of(`Die Kategorie ${id}`);
    }
    */

    @Post()
    @HttpCode(201)
    createCategory(@Body() createCategoryDto: CreateCategoryDto): string {
        this.categoryService.addCategory(createCategoryDto);
        return 'Category created';
    }


}
