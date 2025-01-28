import Head from 'next/head';
import Hero from '../components/Hero';
import OurStory from '../components/OurStory';
import Timeline from '../components/Timeline';
import EventDetails from '../components/EventDetails';
import PhotoGallery from '../components/PhotoGallery';
import Gifts from '../components/Gifts';
import RSVP from '../components/RSVP';
import Footer from '../components/Footer';
import { websiteData } from '../data/websiteData';

export default function Home() {
  return (
    <>
      <Head>
        <title>{websiteData.meta.title}</title>
        <meta name="viewport" content={websiteData.meta.viewport} />
      </Head>
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
      </main>
      <Footer 
        message={websiteData.footer.message}
        hashtag={websiteData.footer.hashtag}
      />
    </>
  );
}
