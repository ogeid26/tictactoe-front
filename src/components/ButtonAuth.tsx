"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function ButtonAuth() {
  const { data: session, status } = useSession();

  console.log({ session, status });

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (session) {
    return (
      <>
        Has iniciado sesión como <b>{session.user?.username}</b>. Para ver tu perfil y el ranking, ve al <b>Dashboard</b><br />
        <button
          onClick={() => signOut()}
          className="btn btn-danger mt-4"
        >
          Sign out
        </button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button
        onClick={() => signIn()}
        className="btn btn-primary"
      >
        Sign in
      </button>
    </>
  );
}
