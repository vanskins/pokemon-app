import Navigation from "@/components/Navigation"
import PokemonCard from "@/components/PokemonCard"

async function getData(offset: number) {
  "use server"
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

async function getPokemonData(name: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

async function onNext(offset: number) {
  "use server"
}
export default async function Home({ searchParams }: { searchParams?: any}) {
  const offset = searchParams.offset ? searchParams.offset : 0
  const data = await getData(offset)
  return (
    <main className="mx-32">
      <Navigation offset={offset} />
      <div className="grid gap-4 grid-cols-fluid">
        {
          data && data.results && data.results.map(async (i: any, k: number) => {
            const details = await getPokemonData(i.name)
            return (
              <PokemonCard key={k} details={details} />
            )
          })
        }
      </div>
    </main>
  )
}
