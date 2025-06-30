const ReviewDetails = async ({
  params,
}: {
  params: { rid: string; id: string };
}) => {
  const { rid, id } = await params;
  return (
    <div>
      review {rid} of product details {id}{" "}
    </div>
  );
};
export default ReviewDetails;
