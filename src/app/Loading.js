import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Loading() {
  return (
    <SkeletonTheme color="#202020" highlightColor="#444">
      <p>
        <Skeleton count={10} />
      </p>
    </SkeletonTheme>
  );
}
