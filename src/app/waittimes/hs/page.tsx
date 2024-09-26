import WaitTimesWrapper from "@/app/waittimes/_components/WaitTimesWrapper";
import Row from "../_components/Row";

export const dynamic = "force-dynamic";

export default async function Hollywood() {
  const res = await fetch(
    "https://api.themeparks.wiki/preview/parks/WaltDisneyWorldHollywoodStudios/waittime"
  );
  const data = await res.json();

  return (
    <WaitTimesWrapper title="Hollywood Studios - SSR">
      {data &&
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data.map((ride: any) => {
          return (
            <Row
              key={ride.id}
              id={ride.id}
              name={ride.name}
              waitTime={ride.waitTime}
            />
          );
        })}
    </WaitTimesWrapper>
  );
}
