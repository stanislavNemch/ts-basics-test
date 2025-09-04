import { useState } from "react";
import toast from "react-hot-toast";

const UserFormAction = () => {
    const [username, setUsername] = useState<string>("");

    const handleSubmit = (formData: FormData) => {
        const username = formData.get("username") as string;
        toast.success(`Name: ${username}`);
        setUsername("");
    };
    return (
        <>
            <h3>FormData Action</h3>
            <form action={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button type="submit" disabled={!username}>
                    Submit
                </button>
            </form>
            <h3>User name is {username}</h3>
        </>
    );
};

export default UserFormAction;
