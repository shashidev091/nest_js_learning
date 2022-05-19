import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    fathers_name: string;

    @Column()
    email: string;

    @Column()
    mobile_number: string;

    @Column()
    user_type: string;
}