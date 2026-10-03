import { useState } from "react";
import ButtonCalculate from "../components/ButtonCalculate";

const MainPage = () => {
    const [name, setName] = useState<number>(0);

    const changeName = (value: number, key: string) => {
        setName(name + 2);
        console.log(value, key)
    }

    return <div>
        {name}
        <ButtonCalculate op={4} back={changeName}/>
    </div>
}

export default MainPage;