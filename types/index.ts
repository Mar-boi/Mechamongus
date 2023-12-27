import { User } from "@prisma/client";

export type SafeUser = Omit<User, 
    "create" | "updateAt" | 
    "emailVerified"
    > & {
        createdAt: String;
        updateAt: string;
        emailVerified: string | null;
    }