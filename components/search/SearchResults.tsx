import { Article } from "contentlayer/generated";

type SearchResultsProps = {
    query: string;
    results: Article[];
};

export default function SearchResults({ query, results }: SearchResultsProps) {
    return (
        <>
            {results.map((article) => {
                return (
                    <p key={article.slug}>
                        {article.title}
                    </p>
                )
            })}
        </>
    )
}