const isPassedEmailPassWord = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const emailRegex = /\S+@/;
  const passwordRegex = /.{8,}/;

  if (!emailRegex.test(email)) {
    return false;
  }

  if (!passwordRegex.test(password)) {
    return false;
  }

  return true;
};

export { isPassedEmailPassWord };
