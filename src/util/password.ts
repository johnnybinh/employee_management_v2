import bcrypt from "bcrypt";

export const saltAndHashPassword = (password: any) => {
  const hashedPassword = bcrypt.hash(password, 10);
  return hashedPassword;
};
