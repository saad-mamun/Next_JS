// Dynamic meta data update

import { Metadata } from "next";

type Props = {
    params: Promise<{productId: string}>
}

export const generatedMetadata = async ({
    params,
}: Props): Promise<Metadata> => {
    const id = (await params).productId;
    const title = await new Promise((resolve) =>{
        setTimeout(() => {
            resolve(`Products ${id}`)
        }, 100);
    })
    return {
        title: `Products ${title}`
    }
}



export default async function ProductsDetails({params}: Props){

   const productId = (await params).productId;
   
   return (
    <div>
        <h1>Details about product {productId}</h1>
    </div>
   )
}