export const splitTextToHtmlChars = (text: string) => {
  return text.split("").map((char, index) => (
    <div key={index} className="char">
      {char}
    </div>
  ));
};
