import React from "react";
import { CastContainer, CastImage } from "./styles";
import { cast, crew } from "../../mocks/DetailMock";

interface ImageRowProps {
  option: string;
}

const ImageRow = ({ option }: ImageRowProps) => {
  let optionData;
  if (option === "Cast") {
    optionData = cast;
  }

  if (option === "Crew") {
    optionData = crew;
  }

  return (
    <CastContainer>
      {optionData?.map((option, index) => (
        <CastImage key={index} source={option.picture} />
      ))}
    </CastContainer>
  );
};

export default ImageRow;
