import { BeforeInsert, BeforeUpdate, Column, Entity } from 'typeorm';

export type User = {
  id: string;
  follow: boolean;
  mainStage: string;
  fireStage: string | null;
  waterStage: string | null;
  earthStage: string | null;
  airStage: string | null;
  aetherStage: string | null;
  createdAt: string | null;
  updatedAt: string | null;
};

@Entity({ name: 'user' })
export class UserEntity implements User {
  @Column({ primary: true, type: 'text' })
  id!: string;

  @Column({ type: 'boolean' })
  follow!: boolean;

  @Column({ type: 'text', name: 'main_stage' })
  mainStage!: string;

  @Column({ type: 'text', name: 'fire_stage', default: null })
  fireStage: string | null = null;

  @Column({ type: 'text', name: 'water_stage', default: null })
  waterStage: string | null = null;

  @Column({ type: 'text', name: 'earth_stage', default: null })
  earthStage: string | null = null;

  @Column({ type: 'text', name: 'air_stage', default: null })
  airStage: string | null = null;

  @Column({ type: 'text', name: 'aether_stage', default: null })
  aetherStage: string | null = null;

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
