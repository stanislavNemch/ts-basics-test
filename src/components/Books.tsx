export interface Book {
    id: string;
    name: string;
}

export default function Books({ id, name }: Book) {
    return (
        <>
            <h1>Books of the week</h1>
            <ul>
                <li key={id}>{name}</li>
            </ul>
        </>
    );
}
