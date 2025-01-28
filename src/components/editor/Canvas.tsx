import EventDetails from "../EventDetails";
import Footer from "../Footer";
import Gifts from "../Gifts";
import Hero from "../Hero";
import OurStory from "../OurStory";
import PhotoGallery from "../PhotoGallery";
import RSVP from "../RSVP";
import Timeline from "../Timeline";

export default function Canvas() {
  return (
    <div className="w-full h-full bg-gray-50 overflow-auto p-4">
      <div className="max-w-4xl mx-auto min-h-[150vh] bg-white rounded-lg shadow-lg">
      <main className="overflow-x-hidden">
        <Hero />
        <OurStory />
        <Timeline />
        <EventDetails />
        <PhotoGallery />
        <Gifts />
        <RSVP />
      </main>
      <Footer />
      </div>
    </div>
  );
}
