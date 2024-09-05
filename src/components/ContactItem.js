import React from "react";
import { SocialIcon } from "react-social-icons";

const ContactItem = ({ iconType, label, href, fallback }) => (
  <li className="text-gray-700 text-lg font-medium flex items-center">
    <SocialIcon url={href} fallback={fallback} className="mr-2 text-primary" />
    <span className="font-bold">{label}:</span>{" "}
    <a href={href} className="text-primary">
      {href}
    </a>
  </li>
);

export default ContactItem;
