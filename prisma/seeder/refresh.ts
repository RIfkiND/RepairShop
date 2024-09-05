import { PrismaClient  } from "@prisma/client";
import bcrypt from 'bcryptjs';

const db = new PrismaClient()

async function main(){
await db.devices.deleteMany({})
await db.parts.deleteMany({})
await db.customer.deleteMany({})

  }


main()
  .then(async () => {
    await db.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await db.$disconnect()
    process.exit(1)
  })