export function validate(body: {
  username: string;
  password: string;
  email: string;
}) {
  const errors: {
    field: string;
    message: string;
  }[] = [];

  if (
    !body.hasOwnProperty("username") &&
    !body.hasOwnProperty("email") &&
    !body.hasOwnProperty("password")
  ) {
    errors.push(
      { field: "username", message: "username cannot be null" },
      { field: "password", message: "invalid password" },
      { field: "email", message: "invalid email" }
    );
    return errors;
  }

  if (body.password.length < 6) {
    errors.push({ field: "password", message: "invalid password" });
  }

  let regex = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$");

  if (!regex.test(body.email)) {
    errors.push({ field: "email", message: "invalid email" });
  }

  if (body.username.length <= 0) {
    errors.push({ field: "username", message: "username cannot be null" });
  }

  return errors;
}
