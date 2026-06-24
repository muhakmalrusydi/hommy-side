import authPattern from "@/assets/auth/ribbon_pattern2.png";
import { ContactLinks } from "@/shared/components/contact-links/ContactLinks";
import { Clock, CreditCard, BedSingle } from "lucide-react";

export function AuthBranding() {
  return (
    <section
      className="
     relative
     hidden
     overflow-hidden
     md:flex
     flex-col
     justify-between
     bg-linear-to-tl
     from-blue-600/40
     via-cyan-500
     to-indigo-600
     p-12
     text-white
   "
    >
      <img
        src={authPattern}
        alt=""
        aria-hidden="true"
        className="
       pointer-events-none
       absolute
       bottom-0
       left-0
       w-[120%]
       max-w-none
       select-none
       opacity-100
     "
      />
      <div
        className="
      relative
      z-10
      flex
      h-full
      flex-col
      justify-between
    "
      >
        <div>
          <h1 className="mb-4 text-7xl tracking-tight">
            <span className="font-heading">Hommy</span>{" "}
            <span className="font-body text-cyan-100">Side</span>
          </h1>

          <p
            className="
          max-w-md
          leading-relaxed
          text-cyan-100
          font-body
        "
          >
            Atur pembayaran, kamar, dan pendapatan kos Anda dalam satu dashboard
            praktis
          </p>
          <ContactLinks />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div
            className="
      flex flex-col
      rounded-xl
      border
      border-white/10
      bg-white/10
      p-5
      backdrop-blur-xl
    "
          >
            <Clock className="mb-4" />

            <p className="text-sm font-semibold">Real-time Monitoring</p>

            <p className="mt-2 text-xs text-white/80">
              Pantau status kamar dan penghuni secara langsung.
            </p>
          </div>

          <div
            className="
      flex flex-col
      rounded-xl
      border
      border-white/10
      bg-white/10
      p-5
      backdrop-blur-xl
    "
          >
            <CreditCard className="mb-4" />

            <p className="text-sm font-semibold">Payment Tracking</p>

            <p className="mt-2 text-xs text-white/80">
              Kelola pembayaran dan tagihan dengan lebih rapi.
            </p>
          </div>

          <div
            className="
      flex flex-col
      rounded-xl
      border
      border-white/10
      bg-white/10
      p-5
      backdrop-blur-xl
    "
          >
            <BedSingle className="mb-4" />

            <p className="text-sm font-semibold">Room Management</p>

            <p className="mt-2 text-xs text-white/80">
              Kelola seluruh unit kos dari satu tempat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
