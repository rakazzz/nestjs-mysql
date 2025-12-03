import { Exclude } from "class-transformer";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Access {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    refresh_token: string;

}