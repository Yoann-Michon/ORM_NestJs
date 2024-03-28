import { Column, Entity, Index, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn, TableInheritance } from "typeorm";
import { Ingredient } from "./ingredient.entity";
import { Review } from "./review.entity";
import { Story } from "./story.entity";

@Entity()
@TableInheritance({column:{type:"varchar", name:"type"}})
export abstract class Recipe{
    @PrimaryGeneratedColumn()
    id!:number;

    @OneToOne(()=>Story, story=>story.recipe)
    story: Story;

    @OneToMany(()=>Review, review=>review.recipe)
    reviews:Review[];

    @ManyToMany(()=>Ingredient)
    @JoinTable()
    ingredients: Ingredient[];

    @Index({unique:true})
    @Column({length: 100})
    name!:string;

    @Column({type:"timestamp",default: ()=>"current_timestamp"})
    created!: Date;

    @Column({default: false})
    speciality!: boolean;

    @Column()
    price!: number;

    @Column({nullable: true})
    end!: Date;
} 