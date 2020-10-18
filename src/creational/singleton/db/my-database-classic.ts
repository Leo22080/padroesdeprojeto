import { User } from '../interfaces/user';

export class MyDatabaseClassic {
  private static _instace: MyDatabaseClassic | null = null;
  private users: User[] = [];

  private constructor() {}

  public static get instance(): MyDatabaseClassic {
    if (MyDatabaseClassic._instace === null) {
      MyDatabaseClassic._instace = new MyDatabaseClassic();
    }
    return MyDatabaseClassic._instace;
  }

  public add(user: User): void {
    this.users.push(user);
  }

  public remove(index: number): void {
    this.users.splice(index, 1);
  }

  public show(): void {
    for (const user of this.users) {
      console.log(user);
    }
  }
}
