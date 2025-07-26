import type React from "react"
import { Calendar, MapPin } from "lucide-react"
import Countdown from "@/components/countdown"
import PatternButton from "@/components/pattern-button"
import BeeIcon from "@/components/bee-icon"
import Image from "next/image"

export default function ConferencePage() {
  const targetDate = "2025-11-07T09:00:00"

  return (
    <div className="bg-[#171717] text-white min-h-screen overflow-hidden relative">
      {/* Countdown Bar */}
      <div className="sticky top-0 z-50 bg-[#171717] border-b-2 border-brand-yellow md:h-[84px] h-[60px] w-full grid grid-cols-4 lg:grid-cols-5 items-center">
        {/* Left side pattern */}
        <div className="flex items-center overflow-hidden h-full">
          <Image
            src="/assets/header-pattern.svg"
            alt=""
            width={89}
            height={232}
            className="md:w-16 w-8 object-cover object-top"
          />
        </div>
        
        <div className="hidden lg:flex items-center -m-12">
          <p className="font-share-tech text-xl text-brand-yellow">TICKETS COMING SOON</p>
        </div>
        
        <div className="flex items-center justify-start md:justify-center col-span-2 lg:col-span-1 -ml-12 sm:ml-0">
          <Countdown targetDate={targetDate} />
        </div>
        
        <div className="flex items-center justify-end lg:col-span-2 md:pr-4 pr-2">
          <PatternButton disabled>
            <span className="sm:hidden whitespace-nowrap">Buy Now</span>
            <span className="hidden sm:inline whitespace-nowrap">Buy Tickets</span>
          </PatternButton>
        </div>
      </div>

      <main className="relative z-10">
        
        {/* Hero Section */}
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
                UMBRACO
                <br />
                <span className="text-brand-yellow">IN THE CITY</span>
              </h1>
              
              <p className="font-bayon text-3xl sm:text-5xl lg:text-hero-sub tracking-tight text-brand-yellow">
                MANCHESTER
              </p>
              
              <div className="space-y-2 flex flex-col items-start w-80 xl:ml-auto">
                <div className="flex items-center gap-2 sm:gap-4">
                  <div className="relative w-[35px] h-[31px] sm:w-[55px] sm:h-[49px] flex items-center justify-center">
                    <div 
                      className="absolute inset-0 w-full h-full"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 55 49' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M41.25 0H13.75L0 24.5L13.75 49H41.25L55 24.5L41.25 0Z' fill='%23FFCC33'/%3E%3C/svg%3E")`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center'
                      }}
                    />
                    <Calendar className="w-4 h-4 sm:w-6 sm:h-6 text-[#171717] relative z-10" />
                  </div>
                  <span className="font-share-tech text-base lg:text-lg text-white">November 7th, 2025</span>
                </div>
                
                <div className="flex items-center gap-2 sm:gap-4">
                  <div className="relative w-[35px] h-[31px] sm:w-[55px] sm:h-[49px] flex items-center justify-center">
                    <div 
                      className="absolute inset-0 w-full h-full"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 55 49' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M41.25 0H13.75L0 24.5L13.75 49H41.25L55 24.5L41.25 0Z' fill='%23FFCC33'/%3E%3C/svg%3E")`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center'
                      }}
                    />
                    <MapPin className="w-4 h-4 sm:w-6 sm:h-6 text-[#171717] relative z-10" />
                  </div>
                  <span className="font-share-tech text:base lg:text-lg text-white">x + why, Manchester</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <div className="max-w-[820px] mx-auto px-4 py-8 md:py-16 space-y-16 md:space-y-32">
          {/* About Section */}
          <section className="border-t border-brand-yellow pt-8 md:pt-16 relative">
            <div className="space-y-6">
              <h2 className="font-bayon text-5xl lg:text-6xl text-brand-yellow tracking-wide">ABOUT</h2>
              <p className="font-share-tech text-lg leading-relaxed">
                Join the Umbraco community in Manchester for a day of inspiring talks, workshops, and networking. 
                Connect with fellow developers, content creators, and Umbraco enthusiasts from around the world.
              </p>
              <p className="font-share-tech text-lg leading-relaxed">
                Whether you're a seasoned Umbraco developer or just getting started, this conference offers something 
                for everyone. Learn about the latest features, best practices, and future of Umbraco.
              </p>
            </div>
            
            {/* Bee Icon - Top for small screens */}
            <div className="absolute top-8 right-0 md:hidden scale-75 origin-top-right">
              <BeeIcon />
            </div>
            
            {/* Bee Icon - Bottom for md+ screens */}
            <div className="absolute -bottom-16 right-0 hidden md:block">
              <BeeIcon />
            </div>
          </section>

          {/* Speakers Section */}
          <section className="border-t border-brand-yellow pt-8 md:pt-16">
            <div className="space-y-6">
              <h2 className="font-bayon text-5xl lg:text-6xl text-brand-yellow tracking-wide upper-case">Speakers</h2>
              <p className="font-share-tech text-lg leading-relaxed">
                We're looking for passionate speakers to share their Umbraco knowledge and experience. 
                Submit your talk proposal and be part of this amazing community event.
              </p>
              <div className="pt-4">
                <PatternButton>
                  Submit your talk
                </PatternButton>
              </div>
            </div>
          </section>

          {/* Schedule Section */}
          <section className="border-t border-brand-yellow pt-8 md:pt-16">
            <div className="space-y-6">
              <h2 className="font-bayon text-5xl lg:text-6xl text-brand-yellow tracking-wide upper-case">Tickets</h2>
              <p className="font-share-tech text-lg leading-relaxed">
                Tickets will be available soon. Sign up to be notified when they go live.
              </p>
              <div className="pt-4">
                <PatternButton disabled>
                  Buy Tickets
                </PatternButton>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-brand-yellow text-black py-8 lg:py-16 px-4 relative">
        {/* Left side pattern */}
        <div className="absolute left-0 top-0 h-full">
          <Image
            src="/assets/footer-pattern.svg"
            alt=""
            width={153}
            height={398}
            className="h-full w-10 sm:w-20 object-cover"
          />
        </div>
        
        <div className="max-w-7xl mx-auto text-left lg:text-center relative z-10">
          <p className="font-share-tech text-base lg:text-sm mx-16 sm:mx-24 md:mx-28 lg:mx-0">
            © 2025 Umbraco in the City: Manchester. Celebrating the Umbraco community.
          </p>
          
          {/* Bee Logo */}
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 scale-75 sm:scale-100 origin-right">
            <BeeIcon variant="footer" />
          </div>
        </div>
      </footer>
    </div>
  )
}