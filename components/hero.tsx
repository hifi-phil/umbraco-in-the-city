import { Calendar, MapPin } from "lucide-react"
import InfoRow from "@/components/info-row"

interface HeroProps {
  title: string
  subtitle: string
  location: string
  date: string
  venue: string
}

export default function Hero({ title, subtitle, location, date, venue }: HeroProps) {
  return (
    <section className="relative h-[50vh] sm:h-screen px-8 z-10">
      {/* Small pattern - xs and sm */}
      <div 
        className="absolute inset-0 block md:hidden"
        style={{
          backgroundImage: "url('/assets/pattern-mobile-small.svg')",
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top center'
        }}
      />
      {/* Medium pattern - md and lg */}
      <div 
        className="absolute inset-0 hidden md:block xl:hidden"
        style={{
          backgroundImage: "url('/assets/pattern-mobile.svg')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}
      />
      {/* Large pattern - xl and above */}
      <div 
        className="absolute inset-0 hidden xl:block"
        style={{
          backgroundImage: "url('/assets/pattern-desktop.svg')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}
      />
      <div className="flex items-center justify-center h-full px-8 pt-40 xxs:pt-48 sm:pt-8">
        <div className="max-w-4xl text-left space-y-1">
          <h1 className="font-bayon text-hero-xs sm:text-hero-sm md:text-hero-md lg:text-hero-lg xl:text-hero-xl tracking-normal text-white">
            {title}
            <br />
            <span className="text-brand-yellow">{subtitle}</span>
          </h1>
          
          <p className="font-bayon text-3xl sm:text-5xl lg:text-hero-sub tracking-tight text-brand-yellow">
            {location}
          </p>
          
          <div className="space-y-2 flex flex-col items-start w-80 xl:ml-auto">
            <InfoRow icon={Calendar} text={date} />
            <InfoRow icon={MapPin} text={venue} />
          </div>
        </div>
      </div>
    </section>
  )
}