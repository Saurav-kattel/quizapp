export async function validateCredantials({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const errors: { field: string; message: string }[] = [];

  if (!email) errors.push({ field: "email", message: "email not found" });
  if (!password)
    errors.push({ field: "password", message: "password not found" });

  if (errors.length > 0) {
    return errors;
  } else {
    if (password.length < 6)
      errors.push({ field: "password", message: "password too short" });
    let regex = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$");

    if (!regex.test(email))
      errors.push({ field: "email", message: "invalid email" });

    return errors;
  }
}
