export const checkValidateData = (name, email, password) => {
  if (name !== null && name.trim().length === 0) {
    return "Name cannot be empty";
  }
  //   const nameValidate = /^[a-zA-Z][a-zA-Z\s.'-]{1,48}[a-zA-Z]$/.test(name);
  const emailValidate = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const passwordValidate =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  //   if (nameValidate === false) {
  //     return "Name is not Valid";
  //   }

  if (emailValidate === false) {
    return "Email is not valid";
  }

  if (passwordValidate === false) {
    return "Password is not Valid";
  }

  return null;
};
