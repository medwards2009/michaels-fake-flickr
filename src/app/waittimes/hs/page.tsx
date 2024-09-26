import WaitTimesWrapper from "@/app/waittimes/_components/WaitTimesWrapper";
import Row from "../_components/Row";
import { WaitTime } from "../../../../types/waitTime";
import FilterTimes from "../_utils/FilterTimes";

export const dynamic = "force-dynamic";

export default async function Hollywood() {
  const res = await fetch(
    "https://api.themeparks.wiki/preview/parks/WaltDisneyWorldHollywoodStudios/waittime"
  );
  const data: WaitTime[] = await res.json();
  const filteredResults = FilterTimes(data);

  return (
    <WaitTimesWrapper title="Hollywood Studios - SSR">
      {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        filteredResults.map((ride) => {
          return (
            <Row
              key={ride.id}
              id={ride.id}
              name={ride.name}
              waitTime={ride.waitTime?.toString() || ""}
            />
          );
        })
      }
    </WaitTimesWrapper>
  );
}
