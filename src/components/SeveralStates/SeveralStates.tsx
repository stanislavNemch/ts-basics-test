interface SeveralStatesProps {
    count: number;
    isOpen: boolean;
    handleClickSeveralStates: () => void;
    toggleMessage: () => void;
}

export default function SeveralStates({
    count,
    isOpen,
    handleClickSeveralStates,
    toggleMessage,
}: SeveralStatesProps) {
    return (
        <div>
            <h3>SeveralStates Component</h3>
            <button onClick={handleClickSeveralStates}>Clicked: {count}</button>
            <button onClick={toggleMessage}>
                {isOpen ? "Hide message" : "Show message"}
            </button>

            {isOpen && <p>🎉 Surprise! You toggled me.</p>}
        </div>
    );
}
