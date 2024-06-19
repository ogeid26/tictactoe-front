"use client";
import UserStats from "@/components/UserStats";
import UsersTable from "@/components/UsersTable";
import { useSession } from "next-auth/react";
import { useState } from "react";

const Dashboard = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  

  return (
    <>
      <div className="pt-4">
        <h1>Hola, {session?.user.username}!</h1>

        <div className="m-5 p-4 rounded ">
          <h1 className="">Tu puntaje</h1>
        <UserStats/>
          <div className="b-3 m-3">
          </div>
          <div>
            
          </div>
      <div className="mt-5">

      <UsersTable />
      </div>
        </div>

        {/* <pre>
          <code>{JSON.stringify(session, null, 5)}</code>
        </pre> */}
      </div>
    </>
  );
};
export default Dashboard;
