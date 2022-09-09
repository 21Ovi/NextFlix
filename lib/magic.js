const { Magic } = require("@magic-sdk/admin");

export const mAdmin = new Magic(process.env.MAGIC_SERVER_KEY);
