import { ChildEntity, Column, Entity } from "typeorm";
import { Recipe } from "./recipe.entity";

@ChildEntity()
export class Calzone extends Recipe{
    @Column()
    xl!:boolean;
}