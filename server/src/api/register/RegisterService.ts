import { prisma } from '../../config/PrismaClient';
import { UserRegisterParams } from './RegisterInterface';
import { HashingPassword } from '../../helpers/HashingPassword';

export const userRegisterService = async ({
  fullname,
  email,
  password,
  confirmPassword,
}: UserRegisterParams) => {
  const findUserByEmail = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (findUserByEmail) throw new Error('Email Already Used');

  if (password != confirmPassword) throw new Error("Password Doesn't Match");

  const hashedPassword = await HashingPassword({ password });

  await prisma.user.create({
    data: {
      fullname,
      email,
      password: hashedPassword,
    },
  });
};
