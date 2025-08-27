import Mailbox from "./MailboxProps";
import Product from "./Product";
import Books, { type Book } from "./Books";
import Alert from "./Alert/Alert";
import Button from "./Button/Button";
import UserMenu from "./UserMenu/UserMenu";
import { HiUserCircle, HiOutlineUserGroup } from "react-icons/hi";

const books: Book[] = [
    { id: "id-1", name: "JS for beginners" },
    { id: "id-2", name: "React basics" },
    { id: "id-3", name: "React Query overview" },
];

export default function App() {
    return (
        <>
            <h1>Products</h1>

            <Product
                name="Tacos With Lime"
                imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=640"
                price={10.99}
            />
            <Product
                name="Fries and Burger"
                imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=640"
                price={14.29}
            />
            <Mailbox username="User Mailbox" messages={["Hello", "World"]} />
            <Mailbox username="User Mailbox" />
            {books.map((book) => (
                <Books key={book.id} id={book.id} name={book.name} />
            ))}
            <Alert />
            <Alert type="success" />
            <Alert type="error" />

            <Button variant="primary" text="Login" />
            <Button variant="secondary" text="Follow" />

            <UserMenu name="John Doe" icon={HiUserCircle} />
            <UserMenu name="Jane Smith" icon={HiOutlineUserGroup} />
            <UserMenu name="Default User" />
        </>
    );
}
