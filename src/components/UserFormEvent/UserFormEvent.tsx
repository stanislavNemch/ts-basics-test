import React, { useState } from "react";

const UserFormEvent = () => {
    const [username, setUsername] = useState<string>("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;

        const formData = new FormData(form);
        const usernameValue = formData.get("username") as string;
        setUsername(usernameValue);
        console.log("usermane: ", usernameValue);

        form.reset();
        setUsername("");
    };
    return (
        <>
            <h3>FormData onSubmit</h3>
            <form onSubmit={handleSubmit}>
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

export default UserFormEvent;
