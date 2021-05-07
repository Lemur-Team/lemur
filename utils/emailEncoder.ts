export const encode = (email: string) => email.replace(/\./g, "_DOT_");

// TODO: check better solution or leave as is - // https://stackoverflow.com/questions/19132867/adding-firebase-data-dots-and-forward-slashes
