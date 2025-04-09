import React from "react"
import Image from "next/image"
import { Movie } from "@/lib/movies"
import { genres } from "@/lib/genres"
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import { ScrollArea } from "./ui/scroll-area"
import StarRating from "./star-rating"
import { Button } from "./ui/button"

type Props = {}

export default function MovieCard({ poster_path, backdrop_path, title, genre_ids, overview, vote_average }: Movie) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="space-y-1 transition ease-in-out hover:scale-105">
          <Image
            className="w-[180px] h-[250px] rounded-lg border object-cover hover:scale-3d"
            src={`https://image.tmdb.org/t/p/w500${poster_path || backdrop_path}`}
            alt={overview}
            width={180}
            height={250}
            priority
          />
          <h3 className="font-bold truncate">{title}</h3>
          <StarRating rating={vote_average} />
          <p>{genre_ids.map((genre: number) => genres[genre]).join(", ")}</p>
        </div>
      </SheetTrigger>
      <SheetContent className="flex flex-col h-full overflow-hidden">
        <SheetHeader>
          <SheetTitle>Movie</SheetTitle>
        </SheetHeader>
        <ScrollArea className="flex-1 overflow-auto">
          <div className="flex flex-col gap-3 px-4">
            <Image
              className="mx-auto w-[180px] h-[250px] rounded-lg border object-cover hover:scale-3d"
              src={`https://image.tmdb.org/t/p/w500${poster_path || backdrop_path}`}
              alt={overview}
              width={180}
              height={250}
            />
            <h3 className="text-center font-bold truncate">{title}</h3>
            <StarRating className="justify-center" rating={vote_average} />
            <div className="space-y-1">
              <p className="font-bold">Genres</p>
              <p>{genre_ids.map((genre: number) => genres[genre]).join(", ")}</p>
            </div>
            <div className="space-y-1">
              <p className="font-bold">Overview</p>
              <p>{overview}</p>
            </div>
          </div>
        </ScrollArea>
        <SheetFooter>
          <Button>Add to watchlist</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}