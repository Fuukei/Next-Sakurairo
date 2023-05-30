import { compareDesc } from "date-fns";
import { allArticles } from "contentlayer/generated";
import ArticleLoader from "@/components/ArticleLoader";
import {Square3Stack3DIcon} from "@heroicons/react/24/solid";

export default function Home() {
    const articles = allArticles.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
      <>
          <div className={"grid content-center justify-items-center min-h-screen"}>
              <div className={"text-center"}>
                  <img src="https://qwq.xyz/wp-content/uploads/2022/03/cocdeshijie.gif" alt="Profile Image" className="w-36 h-36 mx-auto mb-3 hover:rotate-[360deg] duration-500" />
              </div>
              <div className={"w-10/12 max-w-xl"}>
                  <div className={"bg-green-100/75 dark:bg-slate-800/90 backdrop-blur-sm w-full rounded-2xl text-center py-5"}>
                      <span>誰でも大好き!</span>
                  </div>
              </div>
              <div className="flex justify-center mt-5 space-x-3">
                  <a href="#" className={"bg-green-100 dark:bg-slate-800/90 rounded-xl overflow-hidden w-8 h-8"}>
                      <Square3Stack3DIcon className={"p-1"} />
                  </a>

                  <a href="#" className={"bg-green-100 dark:bg-slate-800/90 rounded-xl overflow-hidden w-8 h-8"}>
                      <Square3Stack3DIcon className={"p-1"} />
                  </a>
                  <a href="#" className={"bg-green-100 dark:bg-slate-800/90 rounded-xl overflow-hidden w-8 h-8"}>
                      <Square3Stack3DIcon className={"p-1"} />
                  </a>

              </div>
          </div>

          <main className={"flex justify-center bg-slate-200/70 dark:bg-gray-900/75 backdrop-blur-md"}>
              <div className={"mx-4 lg:mx-auto lg:w-full max-w-4xl"}>
                  <h1 className={"font-heading text-xl md:text-2 xl my-6"}>Articles</h1>
                  <ArticleLoader articles={articles} articlesPerLoad={3} />
              </div>
          </main>
      </>
  )
}
