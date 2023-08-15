import { jwtVerify } from "jose";

export async function verifyJwtToken(request: Request) {
  const token = request.headers.get("token");
  if (!token) return { error: "token not found" };
  const secret = new TextEncoder().encode("sorrymysecretIsProtected");
  try {
    const userInfo = await jwtVerify(token, secret);
    let details: any = {
      email: userInfo.payload.email,
      id: userInfo.payload.userId,
    };
    return details;
  } catch (error) {
    return { error, status: 500 };
  }
}
