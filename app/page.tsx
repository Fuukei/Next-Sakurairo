import ArticleCard from "@/app/ArticleCard";

export default function Home() {
  return (
      <>
          <div className={"grid content-center justify-items-center min-h-screen"}>
              <div className={"w-10/12 max-w-lg"}>
                  <div className={"bg-green-100/75 backdrop-blur-sm w-full text-center rounded-xl py-6"}>
                      <span>誰でも大好き!</span>
                  </div>
              </div>
          </div>

          <main className={"bg-white/60 backdrop-blur-md"}>
              <div className={"mx-4 lg:mx-auto lg:w-[850px]"}>
                  <h1 className={"font-heading text-xl md:text-2 xl my-6"}> Articles</h1>

                  <ArticleCard />
                  <ArticleCard />
              </div>
          </main>
      </>
  )
}
