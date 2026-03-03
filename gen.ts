import { hash } from "bcryptjs";

const password = 'matrixmain';
console.log(await hash(password, 10));
