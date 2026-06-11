import { Mail, MapPin, Phone } from 'lucide-react';

const data = {
  services: [
    { text: 'Desarrollo Web', href: '#' },
    { text: 'Marketing', href: '#' },
    { text: 'Automatizaciones', href: '#' },
    { text: 'Estrategia', href: '#' },
  ],
  about: [
    { text: 'Nosotros', href: '#' },
    { text: 'El equipo', href: '#' },
    { text: 'Proceso', href: '#' },
    { text: 'Casos de éxito', href: '#proyectos' },
  ],
  help: [
    { text: 'Preguntas frecuentes', href: '#faq' },
    { text: 'Soporte', href: '#' },
    { text: 'Chat en vivo', href: '#', hasIndicator: true },
  ],
  contact: {
    email: 'hola@reacstudio.com',
    phone: '+54 9 11 0000 0000',
    address: 'Buenos Aires, Argentina',
  },
  company: {
    name: 'Reac Studio',
    description:
      'Marketing, desarrollo web y automatizaciones para hacer crecer tu negocio. Sin plantillas, sin vueltas — solo resultados.',
  },
};

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const WhatsappIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.042zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
);

const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const socialLinks = [
  { icon: InstagramIcon, label: 'Instagram', href: '#' },
  { icon: WhatsappIcon, label: 'WhatsApp', href: '#' },
  { icon: XIcon, label: 'X', href: '#' },
];

const contactInfo = [
  { icon: Mail, text: data.contact.email },
  { icon: Phone, text: data.contact.phone },
  { icon: MapPin, text: data.contact.address, isAddress: true },
];

export default function Footer4Col() {
  return (
    <footer id="contacto" className="w-full bg-black border-t border-[#b566ff]/10">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

          {/* Marca */}
          <div>
            <div className="flex justify-center gap-2.5 sm:justify-start items-center">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#b566ff] text-black text-lg font-bold shadow-[0_0_20px_-4px_#b566ff]">
                R
              </span>
              <span className="bg-gradient-to-br from-slate-100 to-slate-400 bg-clip-text text-transparent text-2xl font-semibold tracking-tight">
                {data.company.name}
              </span>
            </div>

            <p className="text-white/40 mt-6 max-w-md text-center text-sm leading-relaxed font-light sm:max-w-xs sm:text-left">
              {data.company.description}
            </p>

            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-7">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a href={href} className="text-white/40 hover:text-[#b566ff] transition-colors">
                    <span className="sr-only">{label}</span>
                    <Icon className="size-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columnas de enlaces */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">

            <div className="text-center sm:text-left">
              <p className="text-[#b566ff] text-xs font-mono tracking-[0.2em] uppercase">Nosotros</p>
              <ul className="mt-6 space-y-3 text-sm">
                {data.about.map(({ text, href }) => (
                  <li key={text}>
                    <a className="text-white/50 hover:text-white transition-colors" href={href}>
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-[#b566ff] text-xs font-mono tracking-[0.2em] uppercase">Servicios</p>
              <ul className="mt-6 space-y-3 text-sm">
                {data.services.map(({ text, href }) => (
                  <li key={text}>
                    <a className="text-white/50 hover:text-white transition-colors" href={href}>
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-[#b566ff] text-xs font-mono tracking-[0.2em] uppercase">Ayuda</p>
              <ul className="mt-6 space-y-3 text-sm">
                {data.help.map(({ text, href, hasIndicator }) => (
                  <li key={text}>
                    <a
                      href={href}
                      className={
                        hasIndicator
                          ? 'group flex items-center justify-center gap-1.5 sm:justify-start'
                          : 'text-white/50 hover:text-white transition-colors'
                      }
                    >
                      <span className="text-white/50 group-hover:text-white transition-colors">
                        {text}
                      </span>
                      {hasIndicator && (
                        <span className="relative flex size-2">
                          <span className="bg-[#b566ff] absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
                          <span className="bg-[#b566ff] relative inline-flex size-2 rounded-full" />
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-[#b566ff] text-xs font-mono tracking-[0.2em] uppercase">Contacto</p>
              <ul className="mt-6 space-y-3 text-sm">
                {contactInfo.map(({ icon: Icon, text, isAddress }) => (
                  <li key={text}>
                    <a className="flex items-center justify-center gap-2 sm:justify-start" href="#">
                      <Icon className="text-[#b566ff] size-4 shrink-0" />
                      {isAddress ? (
                        <address className="text-white/50 hover:text-white not-italic transition-colors">
                          {text}
                        </address>
                      ) : (
                        <span className="text-white/50 hover:text-white transition-colors">
                          {text}
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="mt-16 border-t border-[#b566ff]/10 pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-white/30 text-xs tracking-wide">
              Todos los derechos reservados.
            </p>
            <p className="text-white/30 text-xs tracking-wide mt-4 sm:order-first sm:mt-0">
              &copy; {new Date().getFullYear()} {data.company.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
