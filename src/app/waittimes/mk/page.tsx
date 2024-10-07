"use client";

// import { useEffect, useState } from "react";
// import { useQuery } from "@tanstack/react-query";
import WaitTimesWrapper from "../_components/WaitTimesWrapper";
import Row from "../_components/Row";
import LoadingScreen from "../../_components/LoadingScreen";
// import { WaitTime } from "../../../../types/waitTime";
import FilterTimes from "../_utils/FilterTimes";
import useGetMkTimes from "@/hooks/useGetMkTimes";

const Magic = () => {
  // const { error, data, isFetching, refetch } = useQuery({
  //   queryKey: ["repoData"],
  //   queryFn: async () => {
  //     const response = await fetch(
  //       "https://michaels-fake-flickr.vercel.app/api/mk-times"
  //     );
  //     return await response.json();
  //   },
  // });

  const { error, data, loading } = useGetMkTimes();

  if (loading) return <LoadingScreen />;

  const filteredResults = FilterTimes(data);

  return (
    <WaitTimesWrapper title="Magic Kingdom - CSR">
      {error && <p className="border-t p-2">{error.message}</p>}
      {filteredResults.length >= 1 &&
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        filteredResults.map((ride: any) => {
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
