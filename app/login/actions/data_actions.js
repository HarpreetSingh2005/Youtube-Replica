"use server";
import { db } from "../db";
import { users } from "../db/schema";
import { eq } from "drizzle-orm";
import { cookies } from "next/headers";

export async function handleAuth(formData) {
  const type = formData.get("type");
  const emailInput = formData.get("email");
  const passwordInput = formData.get("password");
  if (type === "login") {
    const result = await db
      .select()
      .from(users)
      .where(eq(users.email, emailInput))
      .limit(1);

    const user = result[0];
    if (!user) {
      return { error: "No account found with this email." };
    }

    if (user.password === passwordInput) {
      const cookieStore = await cookies();
      cookieStore.set("user_session", user.email, {
        httpOnly: false,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60,
        path: "/",
      });

      return { success: true, message: "Successfully signin." };
    } else {
      return { error: "Incorrect password." };
    }
  } else {
    const nameInput = formData.get("name");
    const existingUser = await db
      .select()
      .from(users)
      .where(eq(users.email, emailInput));

    if (existingUser.length > 0) {
      return { error: "Email already exists." };
    }

    await db.insert(users).values({
      name: nameInput,
      email: emailInput,
      password: passwordInput,
    });
    return { success: true, message: "Successfully signup." };
  }
}
