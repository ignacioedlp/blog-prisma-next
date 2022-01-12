//lib/prisma.ts
declare global {
  var prisma: PrismaClient; // This must be a `var` and not a `let / const`
}

import {PrismaClient} from '@prisma/client'; 

let prismaC: PrismaClient; //

if(process.env.NODE_ENV === 'production'){
  prismaC = new PrismaClient();
}
else if(!global.prisma){
  prismaC = new PrismaClient();
}else{
  prismaC = global.prisma;
}

export default prismaC;