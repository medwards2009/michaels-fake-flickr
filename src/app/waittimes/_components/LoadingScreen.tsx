import { LinearProgress } from "@mui/material";

export default function Loading() {
  return (
    <div className="flex justify-center w-full h-fit p-4">
      <LinearProgress className="w-full" />
    </div>
  );
}
