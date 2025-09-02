import { MyButton } from "@/components/MyButton";

export default function Home() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <p>Hello there.
      <br />
      <span className="blueText">How do you do?</span>
      </p>
      <img className="avatar" src="/Assets/images/image03_grd.png" alt="Penguin image" width="300" height="200"></img>
      <MyButton />
    </div>
  );
}
