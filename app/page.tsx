import Image from 'next/image'
import ArticleCard from "@/app/ArticleCard";

export default function Home() {
  return (
      <>
          <div className={"grid flex-1"}>
              <div className={"flex items-center justify-center min-h-screen bg-blue-100"}>
                  landing screen
              </div>
              <main className={"bg-green-100"}>
                  <div className={"mx-4 lg:mx-auto lg:w-[800px]"}>
                      <h1 className={"font-heading text-xl md:text-2 xl my-6"}> Articles</h1>

                      <ArticleCard />
                      <ArticleCard />
                  </div>
              </main>
          </div>
      </>
  )
}
