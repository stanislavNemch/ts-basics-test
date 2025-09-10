import { useState } from "react";
import Timer from "../Timer/Timer";
import Modal from "../Modal/Modal";

export default function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);

    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? "Hide timer" : "Show timer"}
            </button>
            {isOpen && <Timer />}

            <div>
                <h1>Main content of the page</h1>
                <button onClick={openModal}>Open modal</button>
                {isModalOpen && (
                    <Modal onClose={closeModal}>
                        <h2>Custom Modal Content</h2>
                        <p>This is a reusable modal with dynamic content.</p>
                    </Modal>
                )}
            </div>
        </>
    );
}

// import axios from "axios";
// import { useEffect, useState } from "react";

// export default function App() {
//     const [count, setCount] = useState(1);
//     const [person, setPerson] = useState(null);

//     useEffect(() => {
//         console.log("Effect ran!");
//         axios
//             // 1. Використовуємо count в ефекті
//             .get(`https://swapi.info/api/people/${count}`)
//             .then((response) => setPerson(response.data));
//     }, [count]); // 2. Додаємо count в залежності ефекта

//     console.log("App rendered!");

//     return (
//         <>
//             <h2>The count is {count}</h2>
//             <button onClick={() => setCount(count + 1)}>
//                 Get next character
//             </button>
//             <pre>{JSON.stringify(person, null, 2)}</pre>
//         </>
//     );
// }

// import axios from "axios";
// import { useEffect, useState } from "react";

// export default function App() {
//     const [count, setCount] = useState(1);
//     const [person, setPerson] = useState(null);

//     useEffect(() => {
//         console.log("Effect ran!");
//         axios
//             .get("https://swapi.info/api/people/1")
//             .then((response) => setPerson(response.data));
//     }, []); // Порожній масив залежностей

//     console.log("App rendered!");

//     return (
//         <>
//             <button onClick={() => setCount(count + 1)}>
//                 The count is {count}
//             </button>
//             <pre>{JSON.stringify(person, null, 2)}</pre>
//         </>
//     );
// }

// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function App() {
//     const [person, setPerson] = useState(null);

//     useEffect(() => {
//         console.log("Effect ran!");
//         axios
//             .get("https://swapi.info/api/people/1")
//             .then((response) => setPerson(response.data));
//     }, []);

//     console.log("App rendred!");

//     return (
//         <>
//             <pre>{JSON.stringify(person, null, 2)}</pre>
//         </>
//     );
// }
