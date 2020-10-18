import { MyDatabaseFunction } from './db/my-database-function';

const myDatabaseFuncion = MyDatabaseFunction;
myDatabaseFuncion.add({ name: 'Leonardo', age: 41 });
myDatabaseFuncion.add({ name: 'Maria', age: 36 });
myDatabaseFuncion.add({ name: 'João', age: 54 });

export { myDatabaseFuncion };
