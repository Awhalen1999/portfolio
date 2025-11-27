import { TerminalBackButton } from "@/components/ui/terminal-back-button";
import { DevEventPhoto } from "@/components/ui/dev-event-photo";

interface DevEvent {
  image: string;
  name: string;
  year: string;
}

const devEvents: DevEvent[] = [
  {
    image: "/dev-events/spellbook-demo.jpg",
    name: "Spellbook Demo",
    year: "2025",
  },
  {
    image: "/dev-events/get-building-hackathon.jpg",
    name: "Get Building Hackathon",
    year: "2025",
  },
  {
    image: "/dev-events/get-building-demo.jpg",
    name: "Get Building Demo",
    year: "2024",
  },
];

export default function DevEventsPage() {
  return (
    <div className="w-full space-y-12">
      <div>
        <h1 className="text-style-header-main mb-2">Dev Events</h1>
        <p className="text-style-body-italic">
          Photos and memories from hackathons, demos, and other coding events.
        </p>
      </div>

      <div className="w-full space-y-12">
        {devEvents.map((event, index) => (
          <DevEventPhoto
            key={index}
            image={event.image}
            name={event.name}
            year={event.year}
          />
        ))}
      </div>

      <TerminalBackButton />
    </div>
  );
}
