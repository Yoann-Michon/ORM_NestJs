import { IsDefined, IsNotEmpty, MaxLength, Min } from "class-validator";
import { PizzaFlavor } from "../enums/pizza-flavor.enum";

export class CreatePizzaDto {
    @IsNotEmpty()
    @MaxLength(100)
    name:string;
    @IsDefined()
    flavor: PizzaFlavor;
    speciality: boolean;
    @IsDefined()
    @Min(0)
    price: number;
    end?: Date;
}
