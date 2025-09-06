import type { Article } from "../types/articles";
import ArticleList from "../ArticleList/ArticleList";

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
        return <p>Loading articles...</p>;
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
