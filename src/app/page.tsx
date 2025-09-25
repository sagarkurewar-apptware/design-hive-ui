import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold">Hello Design Hive</h1>
      <Button>Click me</Button>
    </div>
  );
}
