import React from "react";
import { CiMail } from "react-icons/ci";

export default function Contact() {

  return (
<a href="mailto:camille_mtd@hotmail.com" className="fixed right-5 md:right-10 top-4 md:top-auto md:bottom-10 rounded-full bg-white md:p-3 p-2 z-50">
  <CiMail className="md:w-8 md:h-8 w-5 h-5 fill-orange-500"/>
</a>

  );
};

