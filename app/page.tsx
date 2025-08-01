import type React from "react";
import PatternButton from "@/components/pattern-button";
import Hero from "@/components/hero";
import ContentSection from "@/components/content-section";
import EventSchedule, { type ScheduleDay } from "@/components/event-schedule";

export default function ConferencePage() {
  // Schedule data
  const scheduleData: ScheduleDay[] = [
    {
      day: "Thursday",
      date: "November 6th",
      items: [
        {
          time: "1pm - 5pm",
          activity: "Community Activities",
          description:
            "Hackathons, Open discussions, Workshops... we've not quite decided yet! But something will be happening at the same time as the Partner Summit",
        },
        {
          time: "Evening",
          activity: "After Event Social",
          description: "Joining the Business Partner Summit & Sixes Cricket",
        },
      ],
    },
    {
      day: "Friday",
      date: "November 7th",
      items: [
        {
          time: "9am - 6pm",
          activity: "Umbraco In The City Event",
          description:
            "Main conference day with talks, workshops, and networking",
        },
      ],
    },
  ];

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
            "Join the Umbraco community in Manchester for a day of inspiring talks and networking. Connect with fellow developers and Umbraco enthusiasts from around the world.",
            "Whether you're a seasoned Umbraco developer or just getting started, this conference offers something for everyone. Learn about the latest features, best practices, and future of Umbraco.",
          ]}
          showBeeIcon={true}
        />

        <EventSchedule title="Event Schedule" scheduleData={scheduleData} />

        <ContentSection
          title="Speakers"
          content="We're looking for passionate speakers to share their Umbraco knowledge and experience. Submit your talk proposal and be part of this amazing community event."
        >
          <PatternButton href="https://sessionize.com/umbraco-in-the-city-2025/">
            Submit your talk
          </PatternButton>
        </ContentSection>

        <ContentSection
          title="TICKETS"
          content="Tickets will be available soon."
        >
          <PatternButton disabled>Buy Tickets</PatternButton>
        </ContentSection>
      </div>
    </main>
  );
}
