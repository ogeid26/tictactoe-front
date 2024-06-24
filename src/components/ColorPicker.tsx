import React, { useState } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { SendColor } from "./SendColor";

export default function ColorPicker() {
    const [color, setColor] = useState("");

    const handleColorChange = (selectedColor: string) => {
        setColor(selectedColor);
        SendColor(selectedColor);
    };
    

    return (
        <>
            <div className="mt-4 mb-4">
                <h2>Selección de color</h2>
                <p>Selecciona un color</p>
                <p>Has seleccionado el color: <b>{color ? color : "Ninguno"}</b></p>
                <div>
                    <DropdownButton
                        id="dropdown-button-dark-example2"
                        variant="primary"
                        title="Selecciona un color"
                        className="mt-2"
                        data-bs-theme="light"
                    >
                        <Dropdown.Item
                            active={color === "Rojo"}
                            onClick={() => handleColorChange("Rojo")}
                        >
                            Rojo
                        </Dropdown.Item>
                        <Dropdown.Item
                            active={color === "Verde"}
                            onClick={() => handleColorChange("Verde")}
                        >
                            Verde
                        </Dropdown.Item>
                        <Dropdown.Item
                            active={color === "Amarillo"}
                            onClick={() => handleColorChange("Amarillo")}
                        >
                            Amarillo
                        </Dropdown.Item>
                    </DropdownButton>
                </div>
            </div>
        </>
    );
}
