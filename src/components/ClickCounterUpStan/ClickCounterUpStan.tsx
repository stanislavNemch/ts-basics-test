interface clickCounterUpStanProps {
    value: number;
    onUpdate: () => void;
}

export default function ClickCounterUpStan({
    value,
    onUpdate,
}: clickCounterUpStanProps) {
    return <button onClick={onUpdate}>Clicked: {value}</button>;
}
