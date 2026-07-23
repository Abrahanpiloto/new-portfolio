import React from "react";
import FormEmail2 from "../components/FormEmail2";
import { Analytics } from "@vercel/analytics/react";

const EmailPage = () => {
  return (
    <div>
      <FormEmail2 />
      <Analytics />
    </div>
  );
};

export default EmailPage;
