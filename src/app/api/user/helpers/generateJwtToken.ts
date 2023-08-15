import { SignJWT } from "jose";

export async function generateJwtToken(details: { id: string; email: string }) {
  try {
    const secret = new TextEncoder().encode("sorrymysecretIsProtected");
    if (!secret) return { error: "secret not found" };
    console.log(details);
    try {
      const token = await new SignJWT(details)
        .setIssuedAt()
        .setSubject(details.email)
        .setSubject(details.id)
        .setProtectedHeader({ alg: "HS256" })
        .sign(secret);
      return token;
    } catch (err) {
      return { error: err };
    }
  } catch (err) {
    return { error: err };
  }
}
