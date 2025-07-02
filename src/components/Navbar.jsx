import React from "react";

function Navbar() {
  const pages = [
    { label: "Customers", link: "" },
    { label: "Features", link: "" },
    { label: "Pricing", link: "" },
    { label: "Contact Us", link: "" },
  ];
  return (
    <nav className="flex justify-between text-2xl px-20 py-8 shadow">
      <h1>Karyavar</h1>
      <div className="flex gap-6">
        {pages.map((page) => (
          <a key={page.label} to={page.link}>
            {page.label}
          </a>
        ))}
      </div>
      <button className="bg-blue-300">Login</button>
    </nav>
  );
}

export default Navbar;
