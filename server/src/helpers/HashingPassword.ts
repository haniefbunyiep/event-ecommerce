import bcrypt from 'bcrypt';
const saltRounds = 10;

interface HashPasswordParams {
  password: string;
}

interface IComparePasswordParams {
  passwordFromClient: string;
  passwordFromDatabase: string;
}

export const HashingPassword = async ({ password }: HashPasswordParams) => {
  return await bcrypt.hash(password, saltRounds);
};

export const ComparePassword = async ({
  passwordFromClient,
  passwordFromDatabase,
}: IComparePasswordParams) => {
  return await bcrypt.compare(passwordFromClient, passwordFromDatabase);
};
