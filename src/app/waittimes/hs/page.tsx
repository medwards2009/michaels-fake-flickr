export const dynamic = "force-dynamic";

export default async function Hollywood() {
  const res = await fetch(
    "https://api.themeparks.wiki/preview/parks/WaltDisneyWorldHollywoodStudios/waittime",
    { method: "get", referrerPolicy: "no-referrer" }
  );
  const data = await res.json();

  return (
    <div className="flex justify-center w-full h-fit p-4">
      <div className="border h-fit rounded-lg flex flex-col">
        <h1 className="flex justify-center">Hollywook studios - SSR</h1>
        {data &&
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          data.map((ride: any) => {
            return (
              <div key={ride.id} className="flex justify-between border-t p-2">
                <p>{ride.name}</p>
                <p>{ride.waitTime || ""}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
