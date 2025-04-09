import { cn } from "@/lib/utils"
import { Star, StarHalf } from "lucide-react"

type Props = {
  rating: number,
  className?: string
}

export default function StarRating({ rating, className }: Props) {
  const ratingOutOf5 = (rating / 10) * 5
  const stars = []

  for (let i = 1; i <= 5; i++) {
    if (ratingOutOf5 >= i) {
      stars.push(<Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />)
    } else if (ratingOutOf5 >= i - 0.5) {
      stars.push(
        <div key={i} className="relative w-4 h-4">
          <StarHalf className="w-4 h-4 absolute z-10 top-0 left-0 fill-yellow-500 text-yellow-500" />
          <Star className="w-4 h-4 absolute top-0 left-0 fill-gray-300 text-gray-300" />
        </div>
      )
    } else {
      stars.push(<Star key={i} className="w-4 h-4 fill-gray-300 text-gray-300" />)
    }
  }

  return (
    <div className={cn("flex items-center space-x-1", className)}>
      {stars}
    </div>
  )
}
