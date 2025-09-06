import type { Article } from "../types/articles";
import ArticleList from "../ArticleList/ArticleList";
import { PuffLoader } from "react-spinners";

interface ArticleSectionProps {
    articles: Article[];
    loading: boolean;
    error: boolean;
    hasSearched: boolean;
}

const ArticleSection = ({
    articles,
    loading,
    error,
    hasSearched,
}: ArticleSectionProps) => {
    if (loading) {
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "20px",
                }}
            >
                <PuffLoader color="#36d7b7" />
            </div>
        );
    }

    if (error) {
        return <p>Whoops, something went wrong! Please try again later.</p>;
    }

    if (hasSearched && articles.length === 0) {
        return <p>There are no such articles, according to your request.</p>;
    }

    if (articles.length > 0) {
        return <ArticleList articles={articles} />;
    }

    return null;
};

export default ArticleSection;
