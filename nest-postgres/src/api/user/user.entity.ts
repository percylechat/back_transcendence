import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User_Profile {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    uuid: string;

    @Column({ unique: true })
    username: string;

    @Column()
    is_online: boolean;

    @Column()
    is_in_game: boolean;

    @Column()
    password: string;

    @Column({ default: "bebechat.jpg" })
    avatar: string;

    @Column({default: 1000})
    elo_score: number;
}