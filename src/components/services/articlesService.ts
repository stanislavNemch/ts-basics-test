import axios from "axios";
import type { Article } from "../types/articles";

interface ArticlesHttpResponse {
    hits: Article[];
}

// Створюємо екземпляр axios з базовими налаштуваннями
const apiClient = axios.create({
    baseURL: "https://hn.algolia.com/api/v1",
});

/**
 * Функція для пошуку Articles за ключовим словом.
 * @param query - Рядок для пошуку.
 * @returns Проміс, що повертає масив Articles.
 */
export const fetchArticles = async (query: string) => {
    const response = await apiClient.get<ArticlesHttpResponse>(
        `/search?query=${query}`
    );
    return response.data;
};
