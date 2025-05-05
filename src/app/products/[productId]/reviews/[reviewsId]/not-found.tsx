"use client"

import { usePathname } from "next/navigation"



export default function NotFound(){

    const pathName = usePathname();
    const productId = pathName.split("/")[2];
    const reviewsId = pathName.split("/")[4]

    return (
        <div>
           <h1>Review {reviewsId} Not found for product {productId}</h1> 
        </div>
    )
}