"use client";

import { useQuery } from "@tanstack/react-query";

const Magic = () => {
  const { error, data, isFetching } = useQuery({
    queryKey: ["repoData"],
    queryFn: async () => {
      const response = await fetch(
        "https://api.themeparks.wiki/preview/parks/WaltDisneyWorldMagicKingdom/waittime",
        { method: "get", referrerPolicy: "no-referrer" }
      );
      return await response.json();
    },
  });

  return (
    <div className="flex justify-center w-full h-fit p-4">
      <div className="border h-fit rounded-lg flex flex-col">
        <h1 className="flex justify-center">Magic Kingdom - CSR</h1>
        {isFetching && <p className="border-t p-2">Loading...</p>}
        {error && <p className="border-t p-2">{error.message}</p>}
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
};

export default Magic;
