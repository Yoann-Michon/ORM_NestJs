import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Pizza } from "./pizza.entity";
import { Recipe } from "./recipe.entity";

@Entity()
export class Review{
    @PrimaryGeneratedColumn()
    id!:number;

    @Column({length:100})
    name!:string;

    @ManyToOne(()=>Recipe, recipe=>recipe.reviews)
    recipe: Recipe;
}