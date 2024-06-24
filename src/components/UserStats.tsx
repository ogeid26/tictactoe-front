import React, { useEffect, useState } from 'react';
import { useSession } from "next-auth/react";
import { get } from 'http';

const AUTH_BEARER_TOKEN = process.env.AUTH_BEARER


const UserStats = () => {
const { data: session, status } = useSession();
    const [gamesWon, setGamesWon] = useState();
    const [gamesLost, setGamesLost] = useState();
    const [gamesDrawn, setGamesDrawn] = useState();

        const username = session?.user.username;

    const getGamesWon = async () => {
        const wonRsponse = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/gamesWon/${username}`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${AUTH_BEARER_TOKEN}`,
            },
        });
        const gamesWonData = await wonRsponse.json();
        setGamesWon(gamesWonData.gamesWon);
    };

    const getGamesDrawn = async () => {
        const tiedResponse = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/gamesDrawn/${username}`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${AUTH_BEARER_TOKEN}`,
            },
        });
        const gamesDrawnData = await tiedResponse.json();
        setGamesDrawn(gamesDrawnData.gamesDrawn);
    };
    const getGamesLost = async () => {
        const lostResponse = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/gamesLost/${username}`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${AUTH_BEARER_TOKEN}`,
            },
        });
        const gamesLostData = await lostResponse.json();
        setGamesLost(gamesLostData.gamesLost);
    };
    useEffect(() => {
        getGamesWon();
        getGamesLost();
        getGamesDrawn();
    }, []);

    return (
        <div>
            <table className="table text-center">
              <thead>
                <tr>
                  <th>Victorias</th>
                  <th>Derrotas</th>
                  <th>Empates</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{gamesWon}</td>
                  <td>{gamesLost}</td>
                  <td>{gamesDrawn}</td>
                </tr>
              </tbody>
            </table>

        </div>
    );
};

export default UserStats;