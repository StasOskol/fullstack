import React from "react";
import { createStrCoder } from "../../api/controllers/coder-controller";


const Coder = () => {
    const [value, setValue] = React.useState('');

    const [text, setText] = React.useState("");

    const encode = () => {
        createStrCoder(value)
            .then((response) => {
                console.log(response);
            })
    }

    const decode = () => {
        createStrCoder(value)
            .then((response) => {
                console.log(response);
            })
    }

    return <div
        style={{
            display: "flex",
            justifyContent: "space-around"

        }}>
        <div
            style={{
                display: "flex",
                flexDirection: "column"
            }}>
            <input style={{
                width: "800px"
            }}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button onClick={encode}>
                Закодируй
            </button>

        </div>

        <div style={{
            display: "flex",
            flexDirection: "column"
        }}>
            <input
                style={{
                    width: "800px"
                }}
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={decode}>
                раскодируй
            </button>
        </div>
    </div>

}

export default Coder;