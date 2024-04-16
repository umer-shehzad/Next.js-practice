const ReviewDetails = ({ params }) => {
    return (
      <h1>
        Review {params.reviewId} of Product {params.productId}
      </h1>
    )
  }
  
  export default ReviewDetails
  