import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  Generated,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { User, UserEntity } from './userEntity';

type Action = 'follow' | 'unfollow' | 'message';

type Type = 'pass' | 'fail' | 'hint';

export type Log = {
  id: string;
  userId: string;
  user: User;
  action: Action;
  message: string | null;
  type: Type | null;
  attribute: string | null;
  oldValue: string | null;
  newValue: string | null;
  createdAt: string | null;
  updatedAt: string | null;
};

@Entity({ name: 'log' })
export class LogEntity {
  @Column({ primary: true })
  @Generated('uuid')
  id!: string;

  @Column({ name: 'user_id' })
  userId!: string;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'user_id' })
  user!: User;

  @Column({ type: 'text' })
  action!: Action;

  @Column({ type: 'text', default: null })
  message: string | null = null;

  @Column({ type: 'text', default: null })
  type: Type | null = null;

  @Column({ type: 'text', default: null })
  attribute: string | null = null;

  @Column({ type: 'text', name: 'old_value', default: null })
  oldValue: string | null = null;

  @Column({ type: 'text', name: 'new_value', default: null })
  newValue: string | null = null;

  @Column({ type: 'timestamp', name: 'created_at', default: null })
  createdAt!: string;

  @Column({ type: 'timestamp', name: 'updated_at', default: null })
  updatedAt: string | null = null;

  @BeforeInsert()
  setDateCreated(): void {
    this.createdAt = new Date().toISOString();
  }

  @BeforeUpdate()
  setDateUpdated(): void {
    this.updatedAt = new Date().toISOString();
  }
}
