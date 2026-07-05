import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-10 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <Image
          src="/logo-no-bg.png"
          alt="NexUS"
          width={110}
          height={36}
          className="h-7 w-auto brightness-0 invert"
        />
        <p className="text-sm text-white/30 text-center">
          © {new Date().getFullYear()} NexUS — Next of Us. Lombok, West Nusa
          Tenggara.
        </p>
        <div className="flex gap-5">
          {["Instagram", "WhatsApp", "Email"].map((s) => (
            <a
              key={s}
              href="#"
              className="text-xs text-white/30 hover:text-white/70 transition-colors"
            >
              {s}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
