import { type Article } from 'contentlayer/generated';

/**
 * Search for a query in a text.
 * @returns A boolean indicating whether the query was found in the text.
 */
function searchHit(query: string, text: string) {
    return text.toLowerCase().includes(query.toLowerCase());
}

/**
 * Search for a query in a list of posts.
 * @returns The posts that matched the query in descending order of relevance.
 */
export function searchArticles(query: string, articles: Array<Article>) {
    const articlesWithSearchHits = new Map<Article, number>();

    articles.forEach((article) => {
        if (!query) return;

        const {
            title,
            body: { raw },
        } = article;

        let searchHits = 0;

        if (searchHit(query, title)) {
            searchHits += 10; // give title hits heavy weight
        }
        if (searchHit(query, raw)) {
            searchHits++; // give content hits lightest weight
        }

        if (searchHits > 0) {
            articlesWithSearchHits.set(article, searchHits);
        }
    });

    return Array.from(articlesWithSearchHits.entries())
        .sort(([, a], [, b]) => b - a)
        .map(([article]) => article);
}
