import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./env";

export function createToken(user: string) {
  if (!JWT_SECRET) return false;

  const token = jwt.sign({ user }, JWT_SECRET, {
    expiresIn: "1w",
  });

  return token;
}

export function validateToken(token: string | null) {
  if (!JWT_SECRET || !token) return false;

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as jwt.JwtPayload;
    return decoded;
  } catch (err: any) {
    if (err.name === "TokenExpiredError") {
      console.error("Token has expired");
    } else if (err.name === "JsonWebTokenError") {
      console.error("JWT is malformed:", err.message);
    } else {
      console.error("Token verification failed:", err);
    }
    return false;
  }
}

export async function validateAuth(req: Request) {
  const jwtToken = req.headers.get("authorization");
  const { user } = validateToken(jwtToken) || {};

  if (!user) {
    return Response.json({ message: "Unauthorized" }, { status: 401 });
  }

  return user;
}
