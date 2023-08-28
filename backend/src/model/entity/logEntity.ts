import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  Generated,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Message, MessageEntity } from './messageEntity';
import { User, UserEntity } from './userEntity';

type Action = 'follow' | 'unfollow' | 'message';

export type Log = {
  id: string;
  userId: string;
  user: User;
  action: Action;
  messageId: string | null;
  message: Message | null;
  createdAt: string | null;
  updatedAt: string | null;
};

@Entity({ name: 'log' })
export class LogEntity implements Log {
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

  @Column({ name: 'message_id' })
  messageId: string | null = null;

  @ManyToOne(() => MessageEntity)
  @JoinColumn({ name: 'message_id' })
  message: Message | null = null;

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
