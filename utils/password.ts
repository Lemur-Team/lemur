import crypto from "crypto";

export const getPasshash = (password: string) => {
  const passhash = crypto
    .createHash("md5")
    .update("doTheMagicTrick" + password)
    .digest("hex");
  return passhash;
};
