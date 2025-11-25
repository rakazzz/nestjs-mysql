import { JandaForm } from "src/janda-form/entities/janda-form.entity";
import { Penguburan } from "src/penguburan/entities/penguburan.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({unique: true})
    nik: string;

    @Column()
    birthPlace: string;

    @Column()
    birthDate: string;

    @Column()
    job: string;

    @Column()
    gender: string;

    @Column()
    address: string;

    @OneToMany(() => JandaForm, (jandaForm) => jandaForm.pemohon)
    suketJandaPemohon: JandaForm[];

    @OneToMany(() => Penguburan, (penguburan) => penguburan.pemohon)
    suketPenguburanPemohon: Penguburan[];

    @CreateDateColumn()
    created_at: Date;
}