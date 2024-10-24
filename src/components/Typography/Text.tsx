import styled from "styled-components";
type Text = {
  headingText: string;
  linkHref?: string;
  linkText?: string;
};
const StyledText = styled.p`
  font-family: "Inter";
  color: #303030;
  font-weight: 400;
  font-size: calc(0.8vw + 4px);
  margin-bottom: 10px;
`;
export const Text = ({ headingText, linkHref, linkText }: Text) => {
  return (
    <StyledText>
      {headingText} <a href={linkHref}>{linkText}</a>
    </StyledText>
  );
};
