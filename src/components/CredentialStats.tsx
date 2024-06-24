
import React, { useEffect, useState } from 'react';
import { useSession } from "next-auth/react";
import { ToastContainer, toast } from 'react-toastify';

const AUTH_BEARER_TOKEN = process.env.AUTH_BEARER

const UserCredential = () => {
    const { data: session } = useSession();
    const [credential, setCredential] = useState("");
    const [credentialChange, setCredentialChange] = useState("");

    const username = session?.user.username;

   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        changeCredential();
        
    };

    const changeCredential = async () => {
        const credentialSetter = await fetch (`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/credential/${username}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${AUTH_BEARER_TOKEN}`,
            },
            body: JSON.stringify({
                username: username,
                credential: credentialChange,
            }),
        });
        }

    const getCredential = async () => {
        const credentialGetter = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/credential/${username}`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${AUTH_BEARER_TOKEN}`,
            },
        });
        const credentialGetterData = await credentialGetter.json();
        setCredential(credentialGetterData.credential);
    };

    useEffect(() => {
        getCredential();
    }, []);

    return (
        <>
        <div>
            <h2>Vinculamiento con ESP</h2>
            {credential ? (
                <>
                    Actualmente tu credencial es: <strong>{credential}</strong>

                </>
            ) :
            <>
            Aun no has asignado una credencial!
            </>
            }
        </div>
        <div>
              <form onSubmit={handleSubmit}>
                <div className="mb-3 w-75">
                  <label htmlFor="ssid" className="form-label">{credential ? "Cambia tu credencial" : "Añade tu credencial"}</label>
                  <input type="text"
                  className="form-control"
                  value={credentialChange}
                  onChange={(event) => setCredentialChange(event.target.value)} />
                  </div>
                  <button type="submit"
                  className="btn btn-primary"
                //   onClick={sucessMessage}

                   >Vincular</button>
              </form>
        </div>



        </>
    );
};

export default UserCredential;