import { timestamp } from "rxjs";
import { ChildEntity, Column, Entity, Index, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { PizzaFlavor } from "../enums/pizza-flavor.enum";
import { Recipe } from "./recipe.entity";

@ChildEntity()
export class Pizza  extends Recipe{

    @Index()
    @Column({type:"enum", enum: PizzaFlavor})
    flavor!: PizzaFlavor;
}
