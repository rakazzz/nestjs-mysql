import { Injectable } from "@nestjs/common";
import { User } from "src/user/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Penutupan {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, (user) => user.suketPenutupanPemohon)
    @JoinColumn({referencedColumnName: 'nik'})
    pemohon: User;

    @Column()
    rentangTanggal: string;

    @Column()
    rangka: string;

    @Column()
    tglAcara: string;

    @Column()
    rentangWaktu: string;

    @Column()
    pdfPath: string;

    @Column()
    statusData: string;
}
