import { notFound } from "next/navigation";

const ReviewDetails = ({ params }) => {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <h1>
      Review {params.reviewId} of Product {params.productId}
    </h1>
  )
}

export default ReviewDetails
