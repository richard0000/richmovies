import React from "react";
import { imageUrl } from "../services/api";

const CastCard = ({ cast }) => {
  return (
    <>
      <img
        alt={`Profile image for cast: ${cast.name}`}
        src={imageUrl(cast.profileImagePath)}
        style={{
          borderRadius: "20px",
          width: "125px",
        }}
      />
      <p
        style={{
          fontSize: "12px",
          fontWeight: "bold",
          marginBottom: 0,
          color: "white",
        }}
      >
        {cast.name}
      </p>
      <p style={{ fontSize: "12px", color: "white" }}>{cast.character}</p>
    </>
  );
};

export default CastCard;
