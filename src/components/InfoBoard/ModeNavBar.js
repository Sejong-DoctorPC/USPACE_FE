import React, { useState } from "react";
//import "./styles.css";

const content = [
  {
    tab: "πμΌλ° λͺ¨λ",
    content:
    "μΌλ°μ μΈ λͺ¨λμλλ€!"
  },
  {
    tab: "πμΊ ν λͺ¨λ",
    content:
    "μΊ νμ°¨ μμ΄λ μΊ νμ μ¦κ²¨λ³΄μΈμ ^^"
  },
  {
    tab: "π½μνκ΄ λͺ¨λ",
    content:
    "μ°¨μμ μ¦κΈ°λ μν ν νΈμ μ¬μ "
  },
  {
    tab: "βοΈμ¬λ λνΌμ©",
    content:
    "μ¬λ λνΌμ©μλλ€."
  }
];

const useTabs = (initialTabs, allTabs) => {
  const [contentIndex, setContentIndex] = useState(initialTabs);
  return {
    contentItem: allTabs[contentIndex],
    contentChange: setContentIndex
  };
};

export default function ModeNavTab() {
  const { contentItem, contentChange } = useTabs(0, content);
  return (
    <div className="nav-tab">
      {content.map((section, index) => (
        <button className="mode hover3" onClick={() => contentChange(index)}>{section.tab}</button>
      ))}
      <br />
      <br />
      {contentItem.content}
    </div>
  );
}