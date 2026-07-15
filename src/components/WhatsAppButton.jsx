import { useSiteSettings } from "../context/SiteSettingsContext";

const PREFILLED_MESSAGE = "Hi Swift Chauffeurs, I'd like to know more about your services.";

export default function WhatsAppButton() {
  const { whatsapp_number } = useSiteSettings();
  const href = `https://wa.me/${whatsapp_number}?text=${encodeURIComponent(PREFILLED_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed right-5 bottom-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white transition-transform duration-200 hover:scale-110 active:scale-95 sm:right-7 sm:bottom-7"
    >
      <svg width="30" height="30" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
        <path d="M16.003 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.257.59 4.462 1.712 6.406L3.2 28.8l6.57-1.723a12.74 12.74 0 006.23 1.626h.005c7.06 0 12.8-5.74 12.8-12.8 0-3.42-1.332-6.635-3.75-9.052A12.712 12.712 0 0016.003 3.2zm0 23.36h-.004a10.58 10.58 0 01-5.39-1.476l-.387-.23-4.003 1.05 1.068-3.902-.252-.4a10.55 10.55 0 01-1.617-5.602c0-5.867 4.774-10.64 10.647-10.64a10.57 10.57 0 017.524 3.12 10.57 10.57 0 013.114 7.526c0 5.867-4.774 10.64-10.64 10.64zm5.834-7.967c-.32-.16-1.892-.933-2.185-1.04-.293-.107-.507-.16-.72.16-.213.32-.826 1.04-1.013 1.253-.187.213-.373.24-.693.08-.32-.16-1.35-.498-2.572-1.587-.95-.848-1.592-1.895-1.779-2.215-.187-.32-.02-.493.14-.652.144-.143.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.734-.986-2.374-.26-.623-.523-.539-.72-.549l-.613-.011c-.213 0-.56.08-.853.4-.293.32-1.12 1.094-1.12 2.667 0 1.574 1.146 3.094 1.306 3.307.16.213 2.253 3.44 5.46 4.827.763.33 1.358.526 1.822.674.766.244 1.463.21 2.014.127.614-.092 1.892-.774 2.158-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373z" />
      </svg>
    </a>
  );
}
