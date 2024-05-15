import { Department } from "src/typeorm/entities/Department";

export class CreateUserDto{
    name: string;

    phone_number: string;

    position: string;

    user_role: number;

    email: string;

    address: string;

    gender: string;

    dob: string;

    join_date:string;

    department?: Department;
}