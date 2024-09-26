"use client";

import { useQuery } from "@tanstack/react-query";
import WaitTimesWrapper from "../_components/WaitTimesWrapper";
import Row from "../_components/Row";
import LoadingScreen from "../../_components/LoadingScreen";

const Magic = () => {
  const { error, data, isFetching } = useQuery({
    queryKey: ["repoData"],
    queryFn: async () => {
      const response = await fetch(
        "https://michaels-fake-flickr.vercel.app/api/mk-times"
      );
      return await response.json();
    },
  });

  if (isFetching) return <LoadingScreen />;

  return (
    <WaitTimesWrapper title="Magic Kingdom - CSR">
      {error && <p className="border-t p-2">{error.message}</p>}
      {data &&
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data.map((ride: any) => {
          return (
            <Row
              key={ride.id}
              id={ride.id}
              name={ride.name}
              waitTime={ride.waitTime || ""}
            />
          );
        })}
    </WaitTimesWrapper>
  );
};

export default Magic;
