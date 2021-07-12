import * as React from "react";
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
// markup
const IndexPage = () => {
  React.useEffect(() => {
    console.log("Effecting");
  });
  return (
    <main style={pageStyles}>
      <title>Viren Bhosale</title>
      Viren Bhosale
    </main>
  )
}

export default IndexPage;
