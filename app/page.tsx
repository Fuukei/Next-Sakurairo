import ArticleCard from "@/components/ArticleCard";
import { compareDesc } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";

export default function Home() {
    const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
      <>
          <div className={"grid content-center justify-items-center min-h-screen"}>
              <div className={"text-center"}>
                  <img src="https://qwq.xyz/wp-content/uploads/2022/03/cocdeshijie.gif" alt="Profile Image" className="w-36 h-36 mx-auto mb-3 hover:rotate-[360deg] duration-500" />
              </div>
              <div className={"w-10/12 max-w-xl"}>
                  <div className={"bg-green-100/75 backdrop-blur-sm w-full text-center rounded-2xl py-5"}>
                      <span>誰でも大好き!</span>
                  </div>
              </div>
              <div className="flex justify-center mt-5 space-x-3">
                  <a href="#" className={"bg-green-100 rounded-xl"}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                  </a>

                  <a href="#" className={"bg-green-100 rounded-xl"}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                  </a>
                  <a href="#" className={"bg-green-100 rounded-xl"}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                  </a>

              </div>
          </div>

          <main className={"flex justify-center bg-white/60 backdrop-blur-md"}>
              <div className={"mx-4 lg:mx-auto lg:w-full max-w-4xl"}>
                  <h1 className={"font-heading text-xl md:text-2 xl my-6"}>Articles</h1>
                  {posts.map((post: Post, idx: number) => (
                      <ArticleCard key={idx} {...post} />
                  ))}
              </div>
          </main>
      </>
  )
}
