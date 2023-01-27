import { Injectable } from '@nestjs/common';
import { Prisma, Table } from '@prisma/client';
import { PrismaService } from 'src/users/prisma.service';
import { CreateTableDto } from './dto/create-table.dto';

@Injectable()
export class TablesService {
    constructor(private prismaService: PrismaService) { }

    async createTable(data: CreateTableDto): Promise<Table> {
 
        const table = await this.prismaService.table.create({
            data: {
                number: data.tableNumber,
                createdAt: new Date(),
                updatedAt: new Date(),
            },

        })
        return table
    }

}
