type TParagraphText = {
    headingText: string;
    linkHref?: string; 
    linkText?: string;
};

export const Paragraph = ({ headingText, linkHref, linkText}: TParagraphText) => {
    return (
        <p>
          {headingText}{" "}
          <a href={linkHref}>{linkText}</a>
        </p>
      );
};
