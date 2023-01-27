import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateTableDto } from './dto/create-table.dto';
import { TablesService } from './tables.service';

@Controller('tables')
export class TablesController {
    constructor(private tablesService: TablesService) {}

    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body() createTableDto: CreateTableDto) {
        this.tablesService.createTable(createTableDto)
    }
}
