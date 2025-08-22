import { HashLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <span>
        <HashLoader />
      </span>
    </div>
  );
}
