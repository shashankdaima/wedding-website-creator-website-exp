import EventDetails from "../EventDetails";
import Footer from "../Footer";
import Gifts from "../Gifts";
import Hero from "../Hero";
import OurStory from "../OurStory";
import PhotoGallery from "../PhotoGallery";
import RSVP from "../RSVP";
import Timeline from "../Timeline";
import { websiteData } from "@/data/websiteData";

interface CanvasProps {
  data?: typeof websiteData;
}

export default function Canvas({ data = websiteData }: CanvasProps) {
  return (
    <div className="w-full h-full bg-gray-50 overflow-auto p-4">
      <div className="max-w-4xl mx-auto min-h-[150vh] bg-white rounded-lg shadow-lg">
        <main className="overflow-x-hidden">
          <Hero 
            backgroundImage={data.hero.backgroundImage}
            title={data.hero.title}
            subtitle={data.hero.subtitle}
            date={data.hero.date}
            overlayOpacity={data.hero.overlayOpacity}
          />
          <OurStory 
            title={data.ourStory.title}
            content={data.ourStory.content}
            image={data.ourStory.image}
          />
          <Timeline 
            title={data.timeline.title}
            events={data.timeline.events}
          />
          <EventDetails 
            title={data.eventDetails.title}
            ceremony={data.eventDetails.ceremony}
            reception={data.eventDetails.reception}
            afterParty={data.eventDetails.afterParty}
          />
          <PhotoGallery 
            title={data.photoGallery.title}
            images={data.photoGallery.images}
          />
          <Gifts 
            title={data.gifts.title}
            description={data.gifts.description}
            registries={data.gifts.registries}
          />
          <RSVP 
            title={data.rsvp.title}
            description={data.rsvp.description}
            deadline={data.rsvp.deadline}
          />
        </main>
        <Footer 
          message={data.footer.message}
          hashtag={data.footer.hashtag}
        />
      </div>
    </div>
  );
}
