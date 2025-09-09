import { MyButton } from "@/components/MyButton";
import { Contador } from "@/components/Contador";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <hr />
      <Link href="/taskList">TaskList</Link>
      <hr />
      <Link href="/foodList">Food List</Link>
      <hr />
      <Contador />
      
      <p>Hello there.
      <br />
      <span className="blueText">How do you do?</span>
      </p>
      <img className="avatar" src="/Assets/images/image03_grd.png" alt="Penguin image" width="300" height="200"></img>
      <MyButton />
    </div>
  );
}
