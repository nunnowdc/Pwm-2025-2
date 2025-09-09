import { ProductsList } from "@/components/ProductsList";
import Link from "next/link";

export default function foodList() {
    return (
        <>
            <h1>Welcome to my app</h1>
            <ProductsList />
            <hr />
            <Link href="/">Home</Link>
        </>
    )
}