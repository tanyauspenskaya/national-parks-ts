import React from "react";

interface Props {
  children?: React.ReactNode;
  sectionClass: string;
  sectionId?: string;
}

const Section: React.FC<Props> = props => {
  const { children, sectionClass, sectionId } = props;

  return (
    <section className={`${sectionClass}__section`} id={sectionId}>
      {children}
    </section>
  );
};

export default Section;
