import { MaxLength } from "class-validator";
import { User } from "src/user/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class JandaForm {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, (user) => user.suketJandaPemohon)
    @JoinColumn({referencedColumnName: 'nik'}) 
    pemohon: User;

    @Column()
    jenisCerai: string;

    @Column()
    namaPasangan: string

    @Column()
    pdfPath: string;

    // @Column()
    // nik: string;

    // @Column()
    // tempatLahir: string;

    // @Column()
    // tglLahir: string;

    // @Column()
    // kelamin: string;

    // @Column()
    // pekerjaan: string;

    // @Column()
    // alamat: string;

    @CreateDateColumn()
    tanggal: Date;

    @Column()
    statusData: string;
}
