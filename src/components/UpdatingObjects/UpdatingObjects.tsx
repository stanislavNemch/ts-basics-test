export interface Values {
    x: number;
    y: number;
    updateValue: (key: keyof Values) => void;
}

export default function UpdatingObjects({ x, y, updateValue }: Values) {
    return (
        <div>
            <h3>Updating Objects</h3>
            <p>X: {x}</p>
            <p>Y: {y}</p>
            <button onClick={() => updateValue("x")}>Update X</button>
            <button onClick={() => updateValue("y")}>Update Y</button>
        </div>
    );
}
