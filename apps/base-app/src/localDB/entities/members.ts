import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm/browser';

@Entity('Member')
export class Member {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'text' })
  name!: string;

  @Column({ type: 'text' })
  email!: string;

  @Column({ type: 'int' })
  clubId!: string;

  @Column({ type: 'text' })
  birthDay!: string;
}
