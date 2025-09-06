import toast, { Toaster } from "react-hot-toast";
import OrderForm from "../OrderForm/OrderForm";
import UserFormAction from "../UserFormAction/UserFormAction";
import UserFormEvent from "../UserFormEvent/UserFormEvent";
import SearchForm from "../SearchForm/SearchForm";
import type { Article } from "../types/articles";
import { useState } from "react";
import { fetchArticles } from "../services/articlesService";
import ArticleSection from "../ArticleSection/ArticleSection";

const App = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [hasSearched, setHasSearched] = useState<boolean>(false);

    const handleOrderFormSubmit = (value: string) => {
        toast.success(`User name: ${value}`);
    };

    const handleSearch = async (topic: string) => {
        const toastId = toast.loading("Loading articles...");
        try {
            setHasSearched(true);
            setArticles([]);
            setError(false);
            setLoading(true);
            const data = await fetchArticles(topic);
            if (data.hits.length === 0) {
                toast(
                    "There are no such articles, according to your request.",
                    { id: toastId }
                );
            } else {
                toast.success("Articles loaded successfully!", { id: toastId });
            }

            setArticles(data.hits);
        } catch {
            setError(true);
            toast.error(
                "Whoops, something went wrong! Please try again later.",
                { id: toastId }
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <UserFormEvent />
            <UserFormAction />
            <OrderForm onSubmit={handleOrderFormSubmit} />
            <SearchForm onSubmit={handleSearch} />
            <ArticleSection
                articles={articles}
                loading={loading}
                error={error}
                hasSearched={hasSearched}
            />
            <Toaster />
        </>
    );
};

export default App;
