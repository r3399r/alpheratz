import { BeforeInsert, BeforeUpdate, Column, Entity, Generated } from 'typeorm';

export type Message = {
  id: string;
  message: string;
  type: string;
  createdAt: string | null;
  updatedAt: string | null;
};

@Entity({ name: 'message' })
export class MessageEntity implements Message {
  @Column({ primary: true })
  @Generated('uuid')
  id!: string;

  @Column({ type: 'text' })
  message!: string;

  @Column({ type: 'text' })
  type!: string;

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
