import { notFound } from "next/navigation";

function getRandomInt (count) {
  return Math.floor(Math.random() * count);
}

const ReviewDetails = ({ params }) => {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  const random = getRandomInt(2);
  if(random === 1) {
    throw new Error("Error lodaing review"); 
  }
  return (
    <h1>
      Review {params.reviewId} of Product {params.productId}
    </h1>
  )
}

export default ReviewDetails
