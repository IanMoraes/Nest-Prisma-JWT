import { Injectable } from "@nestjs/common";
import { User, Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}
    async findAll(name?) {
        let users: User[];
        if (!name) return this.prisma.user.findMany();
        else {
            users = await this.prisma.user.findMany({
                where: { name: { contains: name } },
            });
        }
        if (users.length == 0) {
            return "There are no users with this name";
        }
        return users;
    }
}
