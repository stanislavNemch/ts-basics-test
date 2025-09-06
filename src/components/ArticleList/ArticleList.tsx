import type { Article } from "../types/articles";

interface ArticleListProps {
    articles: Article[];
}

const ArticleList = ({ articles }: ArticleListProps) => {
    return (
        <ul>
            {articles.map(({ objectID, url, title }) => (
                <li key={objectID}>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        {title}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default ArticleList;
