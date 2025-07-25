import type React from "react"
import { Calendar, MapPin } from "lucide-react"
import Countdown from "@/components/countdown"
import Image from "next/image"

const PatternBackground = () => (
  <div className="absolute inset-0 left-0 right-0 top-0 bottom-0 w-full h-full overflow-hidden pointer-events-none">
    <Image
      src="/assets/pattern.svg"
      alt=""
      fill
      className="object-contain opacity-50"
    />
  </div>
)

const CustomButton = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => (
  <button
    className={`bg-brand-yellow text-black font-share-tech text-sm px-7 py-2 hover:bg-yellow-400 transition-colors ${className}`}
  >
    {children}
  </button>
)

export default function ConferencePage() {
  const targetDate = "2025-11-07T09:00:00"

  return (
    <div className="bg-[#171717] text-white min-h-screen overflow-hidden relative">
      {/* Countdown Bar */}
      <div className="sticky top-0 z-50 bg-[#171717] border-b-2 border-brand-yellow h-[84px] flex items-center justify-between px-4">
        <div className="flex items-center">
          <p className="font-share-tech text-xl text-brand-yellow">TICKETS COMING SOON</p>
        </div>
        
        <div className="flex items-center">
          <Countdown targetDate={targetDate} />
        </div>
        
        <div className="flex items-center">
          <CustomButton>Notify me when available</CustomButton>
        </div>
      </div>

      <main className="relative z-10">
        
        {/* Hero Section */}
        <section 
          className="relative min-h-screen py-20 px-8 z-10 bg-opacity-50"
          style={{
            backgroundImage: "url('/assets/pattern.svg')",
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }}
        >
          <div className="relative max-w-7xl mx-auto flex flex-col justify-center min-h-[80vh] space-y-16">
            {/* Main Title Section */}
            <div className="text-left">
              <h1 className="font-bayon text-6xl sm:text-8xl lg:text-[218px] lg:leading-[166px] tracking-[-2.7%] text-white">
                UMBRACO
                <br />
                <span className="text-brand-yellow">IN THE CITY</span>
              </h1>
              <p className="font-bayon text-3xl sm:text-5xl lg:text-[81px] lg:leading-[80px] tracking-[-2.7%] text-brand-yellow -mt-2 lg:-mt-3">
                MANCHESTER
              </p>
            </div>
            
            {/* Event Details Section - Below Title */}
            <div className="flex justify-center">
              <div className="flex flex-col gap-2 -mt-12 lg:-mt-16">
                <div className="flex items-center gap-4">
                  <div className="relative w-[55px] h-[49px] flex items-center justify-center">
                    <div 
                      className="absolute inset-0 w-full h-full"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 55 49' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M41.25 0H13.75L0 24.5L13.75 49H41.25L55 24.5L41.25 0Z' fill='%23FFCC33'/%3E%3C/svg%3E")`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center'
                      }}
                    />
                    <Calendar className="w-6 h-6 text-[#171717] relative z-10" />
                  </div>
                  <span className="font-share-tech text-lg lg:text-xl text-white">November 7th, 2025</span>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="relative w-[55px] h-[49px] flex items-center justify-center">
                    <div 
                      className="absolute inset-0 w-full h-full"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 55 49' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M41.25 0H13.75L0 24.5L13.75 49H41.25L55 24.5L41.25 0Z' fill='%23FFCC33'/%3E%3C/svg%3E")`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center'
                      }}
                    />
                    <MapPin className="w-6 h-6 text-[#171717] relative z-10" />
                  </div>
                  <span className="font-share-tech text-lg lg:text-xl text-white">x + why, Manchester</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <div className="max-w-[820px] mx-auto px-4 py-16 space-y-32">
          {/* About Section */}
          <section className="border-t border-brand-yellow pt-16">
            <div className="space-y-6">
              <p className="font-share-tech text-lg leading-relaxed">
                Join the Umbraco community in Manchester for a day of inspiring talks, workshops, and networking. 
                Connect with fellow developers, content creators, and Umbraco enthusiasts from around the world.
              </p>
              <p className="font-share-tech text-lg leading-relaxed">
                Whether you're a seasoned Umbraco developer or just getting started, this conference offers something 
                for everyone. Learn about the latest features, best practices, and future of Umbraco.
              </p>
            </div>
          </section>

          {/* Speakers Section */}
          <section className="border-t border-brand-yellow pt-16">
            <div className="space-y-6">
              <p className="font-share-tech text-lg leading-relaxed">
                We're looking for passionate speakers to share their Umbraco knowledge and experience. 
                Submit your talk proposal and be part of this amazing community event.
              </p>
            </div>
          </section>

          {/* Schedule Section */}
          <section className="border-t border-brand-yellow pt-16">
            <div className="space-y-6">
              <p className="font-share-tech text-lg leading-relaxed">
                The full schedule will be announced soon. Stay tuned for updates on sessions, 
                workshops, and networking opportunities throughout the day.
              </p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-brand-yellow text-black py-16 px-4 relative">
        <div className="max-w-7xl mx-auto text-center relative">
          <p className="font-share-tech text-sm">
            © 2025 Umbraco in the City: Manchester. Celebrating the Umbraco community.
          </p>
          
          {/* Bee Logo */}
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
            <Image
              src="/assets/bee-footer.svg"
              alt="Bee Logo"
              width={96}
              height={68}
              className="w-24 h-auto"
            />
          </div>
        </div>
      </footer>
    </div>
  )
}