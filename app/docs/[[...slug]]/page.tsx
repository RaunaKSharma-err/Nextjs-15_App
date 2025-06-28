import React from "react";

const Docs = ({ params }: { params: { slug: string[] } }) => {
  const { slug } = params;
  if (slug?.length == 2) {
    return (
      <h1>
        viewing feature for {slug[0]} and {slug[1]}
      </h1>
    );
  }
  if (slug?.length == 1) {
    return <h1>viewing feature for {slug[0]}</h1>;
  }
  return (
    <>
      <h1>i am a docs page</h1>
    </>
  );
};

export default Docs;
