import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn({ type: 'int' })
    id!: number;

    @Column({ type: 'varchar', length: '100' })
    name!: string;

    @Column({ type: 'int' })
    age!: number;
}