import { MyButton } from "@/components/MyButton";
import { ProductsList } from "@/components/ProductsList";
import { Contador } from "@/components/Contador";

export default function Home() {
  return (
    <div>
      <h1>Welcome to my app</h1>

      <hr />
      <ProductsList />
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
