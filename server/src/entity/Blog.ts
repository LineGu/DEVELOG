import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne } from 'typeorm';
import { User } from './User';

@Entity()
export class Blog extends BaseEntity {
  @ManyToOne(() => User, (user) => user.blogs)
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToOne(() => User, (user) => user.id)
  author!: number;

  @Column()
  title!: string;

  @Column('simple-json')
  tags!: { name: string; content: string };

  @Column()
  content!: string;

  @Column({ default: 0 })
  numberOfView!: number;

  @Column({ default: 0 })
  likes!: number;

  @Column('simple-json')
  comments!: { userId: number; content: string };
}
