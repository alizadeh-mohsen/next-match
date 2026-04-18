
import Link from "next/link";

export default function Home() {
  return (
    <div >
      <h1 className="text-3xl"> Next Match</h1>
      <Link href={"/members"} >
        Members

      </Link>
    </div>
  );
}
