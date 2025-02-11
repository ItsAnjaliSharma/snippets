import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
export default async function Home() {

  const snippets = await prisma.snippets.findMany();

  if (!snippets) {
    return <div>no snippets</div>
  }
  return (
    <div>
      <h1 className="font-bold text-4xl">Home</h1>
      <div className="flex items-center justify-between">
        <h1>Snippets</h1>
        <Link href={"/snippets/new"}> <Button >New</Button> </Link>
      </div>
      {
        snippets.map((snippet) => {
          return (
            <div key={snippet.id} className="flex item-center justify-between bg-gray-100 p-4 my-2">
              <h1>{snippet.title}</h1>
              {/* <p>{snippet.code}</p> */}
              <Link href={`/snippets/${snippet.id}`}> <Button >View</Button> </Link>
            </div>
          )
        })
      }
    </div>
  );
}
