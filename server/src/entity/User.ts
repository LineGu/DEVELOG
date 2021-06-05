import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany } from 'typeorm';
import { About } from './About';
import { Contact } from './Contact';
import { Blog } from './Blog';

@Entity()
export class User extends BaseEntity {
  @OneToOne(() => Contact, (contact) => contact.author)
  @OneToOne(() => About, (about) => about.author)
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  pw!: number;

  @Column()
  salt!: string;

  @Column()
  nickname!: string;

  @OneToMany(() => Blog, (blog) => blog.id)
  @Column('simple-array')
  blogs!: string[];
}
