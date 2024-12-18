import "./App.css";
import { Button } from "@/components/ui/button";

function App() {
  return (
    <>
      <p className="font-bold left-auto">100+ happy users</p>
      <h2 className="text-3xl">Join the army of furry and fluffy friends</h2>
      <p className="">
        Submit your request and design and we will turn into{" "}
        <span className="font-bold">a doll for you</span>{" "}
      </p>
      <span className="button-container grid grid-rows-4 grid-flow-row gap-4">
        <Button className="bg-black text-white rounded">
          Other users feedback{" "}
        </Button>
        <Button className="bg-white text-black rounded">Get your doll </Button>
      </span>
    </>
  );
}

export default App;
