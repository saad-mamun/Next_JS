import { notFound } from "next/navigation";

export default async function ProductReviews({
    params,
}:{
    params: Promise<{productId: string, reviewsId: string}>;
}){
    const { productId, reviewsId } = await params;
    if(parseInt(reviewsId) > 1000){
        notFound();
    }

    return(
         <div>
            <h1>Reviews {reviewsId} for the Products {productId}</h1>
         </div>
    )
}