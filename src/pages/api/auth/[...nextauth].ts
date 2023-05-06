import NextAuth from "next-auth";
import { authOptions } from "~/_services/authService";

export default NextAuth(authOptions);
