import React from "react";

function Home({ children }) {
  return (
    <div>
      <p>This is home page.</p>
      {children}
    </div>
  );
}

export default Home;
