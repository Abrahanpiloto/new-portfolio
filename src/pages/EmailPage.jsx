import React from "react";
import FormEmail from "../components/FormEmail";
import { Analytics } from "@vercel/analytics/react";

const EmailPage = () => {
  return (
    <div>
      <FormEmail />
      <Analytics />
    </div>
  );
};

export default EmailPage;
