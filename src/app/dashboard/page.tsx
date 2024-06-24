"use client";
import ColorPicker from "@/components/ColorPicker";
import UserCredential from "@/components/CredentialStats";
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
        <div className="m-4 p-4 rounded ">



        <h1>Hola, {session?.user.username}!</h1>

            <div className="b-3 m-3">
              <div>
          <ColorPicker/>
                <UserCredential/>
              </div>
            </div>

          <h2 className="b-3 m-3">Tu puntaje</h2>
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
      </>
  );
};
export default Dashboard;
