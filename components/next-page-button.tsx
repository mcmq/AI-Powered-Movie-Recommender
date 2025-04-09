"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import React from "react"
import { Button } from "./ui/button"
import { ChevronRight } from "lucide-react"

export default function NextPageButton() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const page = Number(searchParams.get("page") || 1)

  function loadNext() {
    const params = new URLSearchParams(searchParams)
    params.set("page", (page + 1).toString())
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <Button
      variant="ghost"
      className="w-max"
      onClick={loadNext}
    >
      <span>Next</span>
      <ChevronRight className="w-4 h-4 ml-4" />
    </Button>
  )
}