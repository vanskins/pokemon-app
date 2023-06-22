interface AppProps {
  details: any;

}

export default function PokemonCard({ details }: AppProps) {
  return (
    <div>
      <div className="h-80 w-64 rounded overflow-hidden shadow-lg max-w-sm bg-white flex flex-col items-center">
        <img className="h-40" src={details.sprites.other['official-artwork'].front_default} />
        <p>{details.name}</p>
        <div className="flex flex-row">
          {details.types.map((t: any, x: number) => {
            return (
              <p className="p-2 m-2 bg-gray-300 rounded-full" key={x}>{t.type.name}</p>
            )
          })}
        </div>
      </div>
    </div>
  )
}