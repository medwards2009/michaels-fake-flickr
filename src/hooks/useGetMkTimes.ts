/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@tanstack/react-query";

type useGetMkTimesReturnType = {
  refetch: () => void;
  data: any;
  loading: boolean;
  error: any;
};

const useGetMkTimes = (): useGetMkTimesReturnType => {
  const { error, data, isFetching, refetch } = useQuery({
    queryKey: ["repoData"],
    queryFn: async () => {
      const response = await fetch(
        "https://michaels-fake-flickr.vercel.app/api/mk-times"
      );
      return await response.json();
    },
  });

  return { refetch, data, error, loading: isFetching };
};

export default useGetMkTimes;
