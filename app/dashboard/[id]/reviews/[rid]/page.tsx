const ReviewDetails = ({ params }: { params: { rid: string } }) => {
  const { rid } = params;
  return <div>review {rid} of product details </div>;
};
export default ReviewDetails;
