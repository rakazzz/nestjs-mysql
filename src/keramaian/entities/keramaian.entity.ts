import { User } from "src/user/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Keramaian {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, (user) => user.suketJandaPemohon)
    @JoinColumn({referencedColumnName: 'nik'}) 
    pemohon: User;

    @Column()
    rangka: string;

    @Column()
    tglAcara: string

    @Column()
    rentangWaktu: string

    @Column()
    pdfPath: string;

    @CreateDateColumn()
    tanggal: Date;

    @Column()
    statusData: string;
}

