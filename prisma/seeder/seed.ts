import { PrismaClient  } from "@prisma/client";
import bcrypt from 'bcryptjs';
const db = new PrismaClient()

async function main(){
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    password: await bcrypt.hash('password123', 10),
  };

  await db.user.create({
    data: user,
  });

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