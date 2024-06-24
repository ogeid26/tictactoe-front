export const WiFiHTTPInfo = async (wifiName: string, password: string, credential: string) => {
    try {
      const response = await fetch('http://192.168.4.1/wifi', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          ssid: wifiName,
          password: password,
          credential: credential,
        }),
      });
  
      if (response.ok) {
        const result = await response.text();
        console.log('Respuesta del ESP32:', result);
        return result;
      } else {
        console.error('Error en la solicitud:', response.statusText);
        return null;
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      return null;
    }
  };
  