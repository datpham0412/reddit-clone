import type { DefaultSessionSession, User } from "next-auth";
import type { JWT as DefaultJWT } from "next-auth/jwt";

type UserId = string;

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: UserId;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      username?: string | null;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    id: UserId;
    username?: string | null;
  }
}
