import type React from "react"
import PatternButton from "@/components/pattern-button"
import Hero from "@/components/hero"
import ContentSection from "@/components/content-section"

export default function ConferencePage() {
  return (
    <main className="relative z-10">
        <Hero 
          title="UMBRACO"
          subtitle="IN THE CITY"
          location="MANCHESTER"
          date="November 7th, 2025"
          venue="x + why, Manchester"
        />

        {/* Content Sections */}
        <div className="max-w-[820px] mx-auto px-4 py-8 md:py-16 space-y-16 md:space-y-32">
          <ContentSection 
            title="About"
            content={[
              "Join the Umbraco community in Manchester for a day of inspiring talks, workshops, and networking. Connect with fellow developers, content creators, and Umbraco enthusiasts from around the world.",
              "Whether you're a seasoned Umbraco developer or just getting started, this conference offers something for everyone. Learn about the latest features, best practices, and future of Umbraco."
            ]}
            showBeeIcon={true}
          />

          <ContentSection 
            title="Speakers"
            content="We're looking for passionate speakers to share their Umbraco knowledge and experience. Submit your talk proposal and be part of this amazing community event."
          >
            <PatternButton>Submit your talk</PatternButton>
          </ContentSection>

          <ContentSection 
            title="TICKETS"
            content="Tickets will be available soon. Sign up to be notified when they go live."
          >
            <PatternButton disabled>Buy Tickets</PatternButton>
          </ContentSection>
        </div>
      </main>
  )
}