export const isPasswordvalidate = (password) => {
  const isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
    password
  );
  if (!isPassword) return "Password is not Valid";
  return null;
};
