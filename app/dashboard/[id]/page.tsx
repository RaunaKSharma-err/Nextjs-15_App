import React from "react";

const UserDetails = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return (
    <>
      <h1>userdetails{id}</h1>
    </>
  );
};

export default UserDetails;
