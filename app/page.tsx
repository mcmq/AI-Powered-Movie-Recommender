import PreviousPageButton from "@/components/previous-page-button"
import NextPageButton from "@/components/next-page-button"
import { fetchMovies } from "@/lib/movies"
import MovieCard from "@/components/movie-card"
import { Button, buttonVariants } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import Link from "next/link"
import { cn } from "@/lib/utils"

type Props = {
  searchParams?: { [key: string]: string | string[] | undefined }
}

export default async function Home({ searchParams }: Props) {
  const data = await fetchMovies({ page: Number(searchParams?.page || 1) })

  if (!data.success)
    return console.log(data.error)

  return (
    <div className="min-h-screen max-w-screen-xl mx-auto flex flex-col">
      <header className="flex justify-between items-center h-14">
        <div></div>
        <Button>Sign In</Button>
      </header>
      <main className="grid grid-cols-[1fr_300px] gap-10 py-6">
        <section className="flex flex-col gap-8">
          <h1 className="text-3xl font-bold">Recommended</h1>
          <div className="w-full grid grid-cols-5 gap-4 py-4">
            {data.movies.map(movie => (
              <MovieCard key={movie.id} {...movie} />
            ))}
          </div>
          <div className="flex justify-between">
            <PreviousPageButton />
            <NextPageButton />
          </div>
        </section>
        <section className="flex flex-col gap-10 overflow-hidden">
          <h1 className="text-3xl font-bold">My List</h1>
          <div className="bg-accent rounded-lg p-6 space-y-4 text-center">
            <p>Sign in to view your list.</p>
            <Link href="/login" className={cn(buttonVariants())}>Sign In</Link>
          </div>
          <Button className="w-full">Create watchlist</Button>
          <ScrollArea className="flex-1 h-full overflow-auto">
          </ScrollArea>
        </section>
      </main>
    </div>
  )
}
