import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  pw!: number;
}
