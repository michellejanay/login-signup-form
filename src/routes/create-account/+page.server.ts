import { fail, redirect } from "@sveltejs/kit";
import type { Action, Actions, PageServerLoad } from "./$types";
import bcrypt from "bcrypt";

import { db } from "$lib/database";

enum Roles {
  ADMIN = "ADMIN",
  USER = "USER",
}

export const load: PageServerLoad = async () => {
  //todo
};

export const actions: Actions = {
  createAccount: async ({ request }) => {
    const data = await request.formData();
    const usersName = data.get("usersName");
    const email = data.get("email");
    const password = data.get("password");

    if (
      typeof usersName !== "string" ||
      typeof email !== "string" ||
      typeof password !== "string" ||
      !usersName ||
      !email ||
      !password
    ) {
      return fail(400, { fail: true });
    }

    const user = await db.user.findUnique({
      where: { email },
    });

    if (user) {
      return fail(400, { email: true });
    }

    await db.user.create({
      data: {
        name: usersName,
        email,
        passwordHash: await bcrypt.hash(password, 10),
        userAuthToken: crypto.randomUUID(),
        role: { connect: { name: Roles.USER } },
      },
    });
    console.log("successfully created");
    throw redirect(303, "/login");
  },
};
