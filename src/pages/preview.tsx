import { useAppSelector } from "@/store/hooks";
import { useAppDispatch } from "@/store/hooks";
import { hydrateFromLocalStorage } from "@/store/editorSlice";
import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import Timeline from "@/components/Timeline";
import EventDetails from "@/components/EventDetails";
import PhotoGallery from "@/components/PhotoGallery";
import RSVP from "@/components/RSVP";
import Gifts from "@/components/Gifts";
import Footer from "@/components/Footer";
import { AnimationProvider } from "@/context/AnimationContext";
import { useEffect } from "react";

export default function PreviewPage() {
  const dispatch = useAppDispatch();
  const websiteData = useAppSelector((state) => state.editor.websiteData);

  useEffect(() => {
    dispatch(hydrateFromLocalStorage());
  }, [dispatch]);

  return (
    <AnimationProvider enableAnimations={true}>
      <div className="min-h-screen bg-white">
            <div className="h-14 bg-white border-b border-gray-200 flex items-center px-4 justify-between">
  <div className="flex items-center space-x-4">
    <h1 className="!text-xl font-semibold text-gray-800">Wedding Website Preview</h1>
  </div>
  <div className="flex items-center space-x-4">
    <button 
      onClick={() => window.close()}
      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
    >
      Close Preview
    </button>
  </div>
</div>

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
      </div>
    </AnimationProvider>
  )
}
