import toast, { Toaster } from "react-hot-toast";
import OrderForm from "../OrderForm/OrderForm";
import UserFormAction from "../UserFormAction/UserFormAction";
import UserFormEvent from "../UserFormEvent/UserFormEvent";
import SearchForm from "../SearchForm/SearchForm";

const App = () => {
    const handleOrderFormSubmit = (value: string) => {
        toast.success(`User name: ${value}`);
    };

    const handleSearch = async (topic: string) => {
        // Тут будемо виконувати HTTP-запит
        toast.success(`Your topic: ${topic}`);
    };

    return (
        <>
            <UserFormEvent />
            <UserFormAction />
            <OrderForm onSubmit={handleOrderFormSubmit} />
            <SearchForm onSubmit={handleSearch} />
            <Toaster />
        </>
    );
};

export default App;
