import { type NextPage } from "next";
import { useSession } from "next-auth/react";
// import Head from "next/head";
// import Link from "next/link";
// import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "~/_services/apiService";

const App: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const { data: sessionData } = useSession();

  return (
    <>
      <main className="flex min-h-screen text-white flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        Hello World
      </main>
    </>
  );
};

export default App;

