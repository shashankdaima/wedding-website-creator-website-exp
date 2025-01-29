import EventDetails from "../EventDetails";
import Footer from "../Footer";
import Gifts from "../Gifts";
import Hero from "../Hero";
import OurStory from "../OurStory";
import PhotoGallery from "../PhotoGallery";
import RSVP from "../RSVP";
import Timeline from "../Timeline";
import { useAppSelector } from "@/store/hooks";
import { DisplayModeProvider } from "@/context/DisplayModeContext";

interface CanvasProps {
  displayMode: "mobile" | "desktop" | "tablet";
}

export default function Canvas({displayMode}:CanvasProps) {
  const websiteData = useAppSelector((state) => state.editor.websiteData);

  return (
    <div className="w-full h-full bg-gray-50 overflow-auto p-4">
      <div className={`mx-auto min-h-[150vh] bg-white rounded-lg shadow-lg ${
        displayMode === 'mobile' ? 'max-w-sm' :
        displayMode === 'tablet' ? 'max-w-2xl' : 'max-w-4xl'
      }`}>
        <DisplayModeProvider displayMode={displayMode}>
          <main className="overflow-x-hidden">
            <Hero 
              backgroundImage={websiteData.hero.backgroundImage}
              title={websiteData.hero.title}
              subtitle={websiteData.hero.subtitle}
              date={websiteData.hero.date}
              overlayOpacity={websiteData.hero.overlayOpacity}
            />
            <OurStory 
              title={websiteData.ourStory.title}
              content={websiteData.ourStory.content}
              image={websiteData.ourStory.image}
            />
            <Timeline 
              title={websiteData.timeline.title}
              events={websiteData.timeline.events}
            />
            <EventDetails 
              title={websiteData.eventDetails.title}
              ceremony={websiteData.eventDetails.ceremony}
              reception={websiteData.eventDetails.reception}
              afterParty={websiteData.eventDetails.afterParty}
            />
            <PhotoGallery 
              title={websiteData.photoGallery.title}
              images={websiteData.photoGallery.images}
            />
            <Gifts 
              title={websiteData.gifts.title}
              description={websiteData.gifts.description}
              registries={websiteData.gifts.registries}
            />
            <RSVP 
              title={websiteData.rsvp.title}
              description={websiteData.rsvp.description}
              deadline={websiteData.rsvp.deadline}
            />
            <Footer 
              message={websiteData.footer.message}
              hashtag={websiteData.footer.hashtag}
            />
          </main>
        </DisplayModeProvider>
      </div>
    </div>
  );
}
