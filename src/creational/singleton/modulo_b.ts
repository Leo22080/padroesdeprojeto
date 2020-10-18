import { MyDatabaseFunction } from './db/my-database-function';
import { myDatabaseFuncion as myDatabaseFunctionFromModulaA } from './modulo_a';

const myDatabaseFuncion = MyDatabaseFunction;
myDatabaseFuncion.add({ name: 'Ashley', age: 22 });
myDatabaseFuncion.add({ name: 'Madison', age: 25 });
myDatabaseFuncion.add({ name: 'Frank', age: 24 });
myDatabaseFuncion.show();

console.log(myDatabaseFuncion === myDatabaseFunctionFromModulaA);
