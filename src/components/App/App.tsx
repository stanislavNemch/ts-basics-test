import { useState } from "react";

const handleClickEvent = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Clicked!", event);
    console.log("Target:", event.target); // сам <button>
};

export default function App() {
    const [clicks, setClicks] = useState(0);
    const handleClick = () => {
        setClicks(clicks + 1);
        console.log("Функції-обробники. I'm a button!");
        console.log("Кількість кліків:", clicks);
    };

    return (
        <>
            <h1>Module №2. Part №2</h1>
            <p>Функції-обробники</p>
            <button onClick={handleClick}>Click me!</button>
            <p>Функції-обробники з лічильником кліків</p>
            <button onClick={handleClick}>Current: {clicks}</button>;
            <p>Функції-обробники з event</p>
            <button onClick={handleClickEvent}>Click me!</button>
            <br />
            <p>Інлайн-функції</p>
            <button onClick={() => console.log("Інлайн-функції. Clicked!")}>
                Click me!
            </button>
        </>
    );
}
