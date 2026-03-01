import { getServerSession } from "next-auth";
import { authOptions } from "./options";

/** Server-seitiger Session-Zugriff */
export function getSession() {
  return getServerSession(authOptions);
}
