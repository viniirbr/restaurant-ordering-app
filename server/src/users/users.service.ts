import { Injectable } from "@nestjs/common";
import { Prisma, User } from "@prisma/client";
import { PrismaService } from "./prisma.service";
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) { }

    async user(
        userWhereUniqueInput: Prisma.UserWhereUniqueInput
    ): Promise<User | null> {
        return this.prisma.user.findUnique({
            where: userWhereUniqueInput
        })
    }

    async createUser(data: Prisma.UserCreateInput): Promise<User> {
        const saltOrRounds = 10;
        const { password } = data;
        const hash = await bcrypt.hash(password, saltOrRounds);
        return this.prisma.user.create({
            data: {
                ...data, password: hash
            }
        })
    }

    async findAll(): Promise<User[]> {
        return this.prisma.user.findMany()
    }
}