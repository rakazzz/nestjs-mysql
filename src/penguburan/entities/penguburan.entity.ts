import { User } from "src/user/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Penguburan {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, (user) => user.suketPenguburanPemohon)
    @JoinColumn({referencedColumnName: 'nik'})
    pemohon: User;
    
    @Column()
    tglMeninggal: string;
    
    @Column()
    waktuMeninggal: string;

    @Column()
    tempatMeninggal: string;

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
