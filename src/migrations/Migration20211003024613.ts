import { Migration } from '@mikro-orm/migrations';

export class Migration20211003024613 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "post" ("_id" serial primary key, "created_at" jsonb not null, "updated_at" jsonb not null, "name" varchar(255) not null);');
  }

}
