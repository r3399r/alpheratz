import { BeforeInsert, BeforeUpdate, Column, Entity } from 'typeorm';

export type User = {
  id: string;
  name: string;
  pictureUrl: string | null;
  isFollow: boolean;
  createdAt: string | null;
  updatedAt: string | null;
};

@Entity({ name: 'user' })
export class UserEntity implements User {
  @Column({ primary: true, type: 'text' })
  id!: string;

  @Column({ type: 'text' })
  name!: string;

  @Column({ type: 'text', name: 'picture_url', default: null })
  pictureUrl: string | null = null;

  @Column({ type: 'boolean', name: 'is_follow' })
  isFollow!: boolean;

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
