import { CONTACT_LINKS } from "@/shared/config/contact-links";

export function ContactLinks() {
  return (
    <div className="mt-8 flex items-center gap-3">
      {CONTACT_LINKS.map((contact) => {
        const Icon = contact.icon;

        return (
          <a
            key={contact.label}
            href={contact.href}
            target={contact.href.startsWith("http") ? "_blank" : undefined}
            rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
            aria-label={contact.label}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              border
              border-white/10
              bg-white/10
              text-white/90
              backdrop-blur-xl
              transition-all
              duration-200
              hover:scale-100
              hover:bg-white/20
              hover:text-white
            "
          >
            <Icon size={18} />
          </a>
        );
      })}
    </div>
  );
}
