import Image from 'next/image'

export default function Home() {
  return (
      <>
          <div className={"container grid flex-1"}>
              <div className={"flex items-center justify-center min-h-screen bg-blue-100"}>
                  landing screen
              </div>
              <main>
                  content
              </main>
          </div>
      </>
  )
}
