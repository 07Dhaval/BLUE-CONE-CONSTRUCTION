import { contactSettings } from "../data/siteData";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path
        fill="currentColor"
        d="M16.04 3.2A12.72 12.72 0 0 0 5.03 22.3L3.2 28.8l6.66-1.75a12.74 12.74 0 1 0 6.18-23.85Zm0 22.98c-2.1 0-4.16-.57-5.96-1.65l-.43-.25-3.95 1.04 1.06-3.85-.28-.44a10.23 10.23 0 1 1 9.56 5.15Zm5.61-7.67c-.31-.16-1.82-.9-2.1-1-.28-.1-.49-.16-.69.15-.2.31-.8 1-.98 1.2-.18.2-.36.23-.67.08-.31-.16-1.3-.48-2.48-1.53a9.3 9.3 0 0 1-1.72-2.14c-.18-.31-.02-.48.14-.63.14-.14.31-.36.46-.54.16-.18.2-.31.31-.51.1-.21.05-.39-.03-.54-.08-.16-.69-1.67-.95-2.29-.25-.6-.5-.52-.69-.53h-.59c-.2 0-.54.08-.82.39-.28.3-1.08 1.05-1.08 2.57 0 1.51 1.1 2.98 1.26 3.18.15.2 2.17 3.31 5.25 4.64.73.31 1.3.5 1.75.64.74.23 1.41.2 1.94.12.59-.09 1.82-.75 2.08-1.47.26-.72.26-1.34.18-1.47-.08-.13-.28-.2-.59-.36Z"
      />
    </svg>
  );
}

export default function WhatsAppButton() {
  const phoneNumber = contactSettings.whatsappNumber.replace(/\D/g, "");
  const encodedMessage = encodeURIComponent(contactSettings.whatsappMessage);
  const href = phoneNumber
    ? `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    : `https://wa.me/?text=${encodedMessage}`;

  return (
    <a
      className="whatsapp-float"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Blue Cone on WhatsApp"
      data-label="Chat on WhatsApp"
    >
      <span className="whatsapp-float-ring" aria-hidden="true" />
      <WhatsAppIcon />
    </a>
  );
}
