import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
    @ApiProperty()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(64)
    password: string;

    @ApiProperty()
    @IsNotEmpty()
    @MaxLength(200)
    name: string;
}
