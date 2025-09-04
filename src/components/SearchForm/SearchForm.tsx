import toast from "react-hot-toast";

interface SearchFormProps {
    onSubmit: (topic: string) => void;
}

export default function SearchForm({ onSubmit }: SearchFormProps) {
    const handleSubmit = (formData: FormData) => {
        const topic = formData.get("topic") as string;

        // Якщо текстове поле порожнє, виводимо повідомлення
        // і припиняємо виконання функції.
        if (topic === "") {
            toast.error(`Please enter search topic!`);
            return;
        }

        // У протилежному випадку викликаємо пропс
        // і передаємо йому значення поля
        onSubmit(topic);
    };

    return (
        <>
            <h3>SearchFormProps</h3>
            <form action={handleSubmit}>
                <input type="text" name="topic" />
                <button type="submit">Search</button>
            </form>
        </>
    );
}
