import { Magic } from "magic-sdk";

const createMagic = async () => {
  return (
    typeof window !== "undefined" &&
    new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_API)
  );
};

export const magic = await createMagic();
