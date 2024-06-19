import mqtt from "mqtt";

const protocol = "mqtt";
const host = "54.145.124.253";
const port = "1884";
const clientId = "42"

const connectUrl = `${protocol}://${host}:${port}`

export const SendWifiInfo = (wifiName: string, password: string) => {
  const client = mqtt.connect(connectUrl, {
    clientId,
    clean:true,
    connectTimeout: 4000
  });
  client.on("connect", () => {
    client.publish("wifi", wifiName)
    client.publish("password", password)
    client.end()
  })
};
