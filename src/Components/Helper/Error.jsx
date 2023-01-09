import React from "react";

export const Error = ({err}) => {
  if (!err) return null;
  return (
    <>
      <p style={{ color: "#F31", margin: "1rem 0" }}>{err}</p>
    </>
  );
};
