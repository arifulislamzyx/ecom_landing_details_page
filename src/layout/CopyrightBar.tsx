import React from "react";
import { nunitoSans } from "../../pages";

const CopyrightBar = () => {
  return (
    <div
      className={`bg-primary-600 h-14 text-white flex items-center justify-center text-base ${nunitoSans.variable}`}
    >
      <p>© 2024 | We5ive</p>
    </div>
  );
};

export default CopyrightBar;
