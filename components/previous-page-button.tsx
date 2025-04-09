"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import React from "react"
import { Button } from "./ui/button"
import { ChevronLeft } from "lucide-react"

export default function PreviousPageButton() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const page = Number(searchParams.get("page") || 1)

  function loadPrevious() {
    const params = new URLSearchParams(searchParams)
    if (page > 1) {
      params.set("page", (page - 1).toString())
      replace(`${pathname}?${params.toString()}`)
    }
  }

  return (
    <Button
      variant="ghost"
      className="w-max"
      onClick={loadPrevious}
      disabled={page <= 1}
    >
      <ChevronLeft className="w-4 h-4 mr-4" />
      <span>Previous</span>
    </Button>
  )
}