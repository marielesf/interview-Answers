import React from "react";
import styled from "styled-components";

const Img = styled.img`
  width: 80vw;
`;
export default function Interview() {
  return (
    <>
      <h2>Welcome to your first simple interview</h2>
      <h3>Tell me about yourself</h3>
      <p>...</p>
      <h3>What language is your favorite ? </h3>
      <p>Currently i'm coding using react because AS EMPRESAS UTILIZAM</p>
      <h3>List your soft skills</h3>

      <p>...............</p>
      <Img src="https://cdn-blog.novoresume.com/articles/soft-skills/soft-skills.png" />
    </>
  );
}
