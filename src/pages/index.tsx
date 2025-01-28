import Head from 'next/head';
import Hero from '../components/Hero';
import OurStory from '../components/OurStory';
import Timeline from '../components/Timeline';
import EventDetails from '../components/EventDetails';
import PhotoGallery from '../components/PhotoGallery';
import Gifts from '../components/Gifts';
import RSVP from '../components/RSVP';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sarah & John - Wedding Celebration</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
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
    </>
  );
}
