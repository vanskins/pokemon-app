async function getData() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon')
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

export default async function Home() {
  const data = await getData()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-center">
        <h1 className="text-lg">PokeAPI</h1>
        <button type="button" className="rounded-md bg-gray-300 p-4 m-2">Previous</button>
        <label className="p-4">Show 10 results</label>
        <button type="button" className="rounded-md bg-gray-300 p-4 m-2">Next</button>
      </div>
      <div className="grid grid-cols-5 gap-4">
        {
          data && data.results && data.results.map(async (i: any, k: number) => {
            const details = await getPokemonData(i.name)

            return (
              <div className="bg-white flex flex-col items-center" key={k}>
                <img src={details.sprites.front_default} />
                <p>{i.name}</p>
                <div className="flex flex-row">
                  {details.types.map((t: any, x: number) => {
                    console.log(t)
                    return (
                      <p className="p-2 m-2 bg-gray-300 rounded-full" key={x}>{t.type.name}</p>
                    )
                  })}
                </div>
              </div>
            )
          })
        }
      </div>
    </main>
  )
}
