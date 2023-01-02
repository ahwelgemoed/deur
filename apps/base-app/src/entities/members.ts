import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm/browser';

@Entity('author')
export class Author {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'text' })
  name!: string;

  @Column({ type: 'text' })
  cardNumber!: string;

  @Column({ type: 'text' })
  birthDay!: string;
}
