import { Controller, Get, Req } from "@nestjs/common";
import { Param, Query } from "@nestjs/common/decorators";
import { Public } from "src/decorators/public.decorator";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get("/me")
    me(@Req() req) {
        return req.user;
    }

    @Public()
    @Get("/")
    findAll() {
        return this.userService.findAll();
    }

    @Public()
    @Get("/name/:name")
    findAllByName(@Param("name") name: string) {
        return this.userService.findAll(name);
    }
}
