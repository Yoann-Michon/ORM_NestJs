import { Column, Entity, In, Index, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Pizza } from "./pizza.entity";
import { Recipe } from "./recipe.entity";

@Entity()
export class Story {

    @PrimaryGeneratedColumn()
    id!:number;

    @OneToOne(()=>Recipe)
    @JoinColumn()
    recipe: Recipe;

    @Column({length:500})
    anecdote!: string;

    @Index()
    @Column({length: 100})
    city?: string;
}