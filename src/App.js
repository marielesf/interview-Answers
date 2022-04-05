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
      <p>
        My background is software developer. I have been working with react to
        improve my front-end developer skills
      </p>
      <h3>What language is your favorite ? </h3>
      <p>
        Currently i'm coding using react because is a lib very adptable and
        powerfull. In addition the comunity have a large support.
      </p>
      <h3>List your soft skills</h3>

      <p>I am TeamWork, adaptability, work ethic</p>
      <Img src="https://cdn-blog.novoresume.com/articles/soft-skills/soft-skills.png" />
    </>
  );
}
