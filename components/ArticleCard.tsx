import Image from "next/image";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { Article } from "contentlayer/generated";

type ArticleCardProps = {
    article: Article;
    idx: number;
}

export default function ArticleCard({ article, idx }: ArticleCardProps) {

    return (
        <div className={`bg-white dark:bg-gray-900/75 flex flex-col md:flex-row ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'} 
        w-full rounded-xl overflow-hidden shadow-lg hover:shadow-2xl duration-500 mb-4 md:mb-6 md:max-h-72`}>
            <div className="w-full md:w-7/12 overflow-hidden">
                <Link href={article.url}>
                    <Image src={article.image}
                           alt={"Article image"}
                           className={"w-full h-64 md:h-full object-cover hover:scale-110 duration-500"}
                           width={1920}
                           height={1080}/>
                </Link>
            </div>

            <div className="w-full md:w-5/12 p-4 lg:px-8">
                <div className={"flex mb-4"}>
                    <div className={"bg-accent_color/50 dark:bg-accent_color-dark/50 rounded-lg"}>
                        <div className={"text-xs py-1 px-2"}>Posted on {format(parseISO(article.date), 'LLLL d, yyyy')}</div>
                    </div>
                </div>

                <div className={`${idx % 2 === 0 ? 'lg:justify-items-end text-end' : 'lg:justify-items-start'} lg:grid`}>
                    <h2 className="font-bold text-lg mb-2 line-clamp-2 hover:text-primary_color hover:dark:text-primary_color-dark duration-200">
                        <Link href={article.url}>{article.title}</Link>
                    </h2>

                    <p className="text-sm line-clamp-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque,
                        aliquet sit amet elementum eu, eget massa. Donec metus mauris,
                        aliquam id dolor id, blandit condimentum magna.
                    </p>
                </div>
            </div>
        </div>
    )
}