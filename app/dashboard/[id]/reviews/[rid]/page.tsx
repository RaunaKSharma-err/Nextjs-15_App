const ReviewDetails = ({ params }: { params: { rid: string; id: string } }) => {
  const { rid, id } = params;
  return (
    <div>
      review {rid} of product details {id}{" "}
    </div>
  );
};
export default ReviewDetails;
