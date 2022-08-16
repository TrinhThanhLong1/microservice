import { IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator";



export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    username: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsNumber()
    age: number
}

export default CreateUserDto;