import { useState } from "react";
import ClickCounter from "../ClickCounter/ClickCounter";
import ClickCounterUpStan from "../ClickCounterUpStan/ClickCounterUpStan";
import SeveralStates from "../SeveralStates/SeveralStates";
import UpdatingObjects, {
    type Values,
} from "../UpdatingObjects/UpdatingObjects";

const handleClickEvent = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Clicked!", event);
    console.log("Target:", event.target); // сам <button>
};

export default function App() {
    const [values, setValues] = useState<Values>({
        x: 0,
        y: 0,
        updateValue: () => {},
    });

    const [count, setCount] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const [clicks, setClicks] = useState(0);

    const handleClick = () => {
        setClicks(clicks + 1);
        console.log("Функції-обробники. I'm a button!");
        console.log("Кількість кліків:", clicks);
    };

    const handleClickSeveralStates = () => {
        setCount(count + 1);
    };

    const toggleMessage = () => {
        setIsOpen(!isOpen);
    };

    const updateValue = (key: keyof Values) => {
        if (key === "x" || key === "y") {
            setValues({
                ...values,
                [key]: (values[key] as number) + 1,
            });
        }
    };

    // const updateX = () => {
    //     setValues({
    //         ...values,
    //         x: values.x + 1,
    //     });
    // };

    // const updateY = () => {
    //     setValues({
    //         ...values,
    //         y: values.y + 1,
    //     });
    // };

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
            <br />
            <p>Лічильник кліків ClickCounter One</p>
            <ClickCounter />
            <br />
            <p>Лічильник кліків ClickCounter Two</p>
            <ClickCounter />
            <br />
            <p>Лічильник кліків ClickCounter UpStan</p>
            <ClickCounterUpStan value={clicks} onUpdate={handleClick} />
            <ClickCounterUpStan value={clicks} onUpdate={handleClick} />
            <br />
            <p>Лічильник кліків SeveralStates</p>
            <SeveralStates
                count={count}
                isOpen={isOpen}
                handleClickSeveralStates={handleClickSeveralStates}
                toggleMessage={toggleMessage}
            />
            <br />
            <p>Оновлення об'єктів</p>
            <UpdatingObjects
                updateValue={updateValue}
                x={values.x}
                y={values.y}
            />
        </>
    );
}
