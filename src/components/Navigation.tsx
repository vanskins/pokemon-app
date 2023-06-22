'use client'
import { useState } from 'react'
import Link from 'next/link'

interface AppProps {
  offset?: any
}

export default function Navigation({ offset }: AppProps) {
  const currentOffset = offset ? offset : 0
  return (
    <div className="text-center">
      <h1 className="text-lg">PokeAPI</h1>
      <Link href={`/?offset=${parseInt(currentOffset) - 10}`}>
      <button disabled={parseInt(currentOffset) === 0} type="button" className="rounded-md bg-gray-300 p-4 m-2">Previous</button>
      </Link>
      <label className="p-4">Show 10 results</label>
      <Link href={`/?offset=${parseInt(currentOffset) + 10}`}>
        <button type="button" className="rounded-md bg-gray-300 p-4 m-2">Next</button>
      </Link>
      
    </div>

  )
}