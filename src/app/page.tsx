"use client"

import ButtonAuth from "@/components/ButtonAuth";
import { SendWifiInfo } from "@/components/SendWifiInfo";
import { WiFiHTTPInfo } from "@/components/WiFiHTTPInfo";
import { FormEvent, useState } from "react";


const HomePage = () => {
  const [wifiName, setWifiName] = useState("");
  const [password, setPassword] = useState("");
  const [credential, setCredential] = useState("")


  const sendHTTPWiFiInfo = () => {
  WiFiHTTPInfo(wifiName, password, credential);  
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    sendHTTPWiFiInfo();
  };

  return (
    <div className="container p-3">
      <div>
        <h1>Página Principal</h1>
        <ButtonAuth />

        <div className="container text-bg-primary mt-5 p-4 rounded w-50">
          <h1>Credenciales de Internet</h1>
          <p>Por favor, agrega el nombre y la clave de la WiFi a la que estás conectad@</p>
          <form onSubmit={handleSubmit} className="m-4 w-50 b-2 color-primary">
            <label className="form-label">Nombre de la WiFi</label>
            <input
              type="text"
              className="form-control"
              value={wifiName}
              onChange={(e) => setWifiName(e.target.value)}
            />
            <label className="form-label">Credencial ESP32</label>
            <input
              type="text"
              className="form-control"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
            />
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="btn btn-secondary mt-4">
              Conectar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};


export default HomePage;
