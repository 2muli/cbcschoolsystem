import React from "react";

const Footer: React.FC = () => {
  return (
   <footer className="footer sm:footer-horizontal footer-center text-center bg-gray-200 text-base-content p-4">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by mwcreatives</p>
  </aside>
</footer>
  );
};

export default Footer;
