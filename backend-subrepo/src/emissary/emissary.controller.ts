import { Controller, Get, Post, Body, Param, Put, Patch } from '@nestjs/common';
import { EmissaryService } from './emissary.service';
import uniqid from 'uniqid';

@Controller('emissary')
export class EmissaryController {
    constructor(private readonly emissaryService: EmissaryService) { }

    @Post()
    create(@Body() data) {
        var d = data;
        d.code = uniqid.time()
        return this.emissaryService.create(data);
    }

    @Get()
    findAll() {
        return this.emissaryService.findAll();
    }

    @Get(':owner')
    findOne(@Param('owner') owner: string) {
        return this.emissaryService.findByOwner(owner);
    }

    @Get('/one/:id')
    findOneById(@Param('id') id: string) {
        return this.emissaryService.findById(id);
    }


    @Put()
    findData(@Body() data: any) {
        return this.emissaryService.updateById(data.id, data);
    }



}
