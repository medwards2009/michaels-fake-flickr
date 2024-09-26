import { WaitTime } from "../../../../types/waitTime";

const FilterTimes = (data: WaitTime[]): WaitTime[] => {
  const filteredResults: WaitTime[] = [];
  data.forEach((ride) => {
    if (ride.status === "Down") {
      filteredResults.push({ ...ride, waitTime: "Down" });
    } else if (ride.status === "Operating" && ride.waitTime !== null) {
      filteredResults.push(ride);
    }
  });

  return filteredResults;
};

export default FilterTimes;
