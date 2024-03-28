import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Pizza } from "./pizza.entity";
import { Recipe } from "./recipe.entity";

@Entity()
export class Ingredient{
    @PrimaryGeneratedColumn()
    id!:number;

    @Column({length:100})
    name!:string;

    @ManyToMany(()=>Recipe)
    recipes: Recipe[];
}