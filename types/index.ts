import { User } from "@prisma/client";

export type SafeUser = Omit<User, "create" | "updatedAt" | "emailVerified"> & {
  createdAt: String;
  updatedAt: string;
  emailVerified: string | null;
};
