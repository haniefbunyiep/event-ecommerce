import { prisma } from './PrismaClient';
import { HashingPassword } from './../helpers/HashingPassword';

const main = async () => {
  await prisma.$transaction(async (tx) => {
    await tx.user.createMany({
      data: [
        {
          fullname: 'Alpha Test',
          email: 'alpha@test.com',
          password: await HashingPassword({ password: 'test1234' }),
        },
      ],
    });
  });
};

main()
  .catch((error) => {
    console.log(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
