import { Metadata } from "next";
import React from "react";
type props = {
  params: { id: string };
};

export const generateMetadata = async ({
  params,
}: props): Promise<Metadata> => {
  const product = params.id;
  return { title: ` product ${product}` };
};

const UserDetails = async ({ params }: props) => {
  const details = params.id;
  return (
    <>
      <h1>userdetails {details}</h1>
    </>
  );
};

export default UserDetails;
