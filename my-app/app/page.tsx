import Image from "next/image";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
export default function Home() {
  return (
    <div>
      <Button>TEST</Button>
      <Input type="text" />
      <h1 className="font-poppins">test</h1>
      <h1 className="font-pacifico">test</h1>
      <h1 className="font-titillium">test</h1>
    </div>
  );
}
