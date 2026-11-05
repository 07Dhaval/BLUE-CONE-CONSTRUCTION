import { Phone } from "lucide-react";
import { contactSettings } from "../data/siteData";

export default function CallButton() {
  return (
    <a
      className="contact-float call-float"
      href={`tel:${contactSettings.phoneNumber}`}
      aria-label="Call Blue Cone on +91 8780249715"
      data-label="Call +91 8780249715"
    >
      <span className="call-float-ring" aria-hidden="true" />
      <Phone aria-hidden="true" />
    </a>
  );
}
