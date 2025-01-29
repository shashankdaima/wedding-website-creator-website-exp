import Head from 'next/head';
import Hero from '../components/Hero';
import OurStory from '../components/OurStory';
import Timeline from '../components/Timeline';
import EventDetails from '../components/EventDetails';
import PhotoGallery from '../components/PhotoGallery';
import Gifts from '../components/Gifts';
import RSVP from '../components/RSVP';
import Footer from '../components/Footer';
import { websiteData as staticValue } from '../data/websiteData';
import { GetServerSideProps } from 'next';
import path from 'path';
import fs from 'fs';

interface HomeProps {
  websiteData: typeof staticValue;
}

export default function Home({ websiteData }: HomeProps) {
  // Use websiteData from props, fallback to staticValue if not available
  const data = (websiteData as any).editor.websiteData || staticValue;
  return (
    <>
      <Head>
        <title>{data.meta.title}</title>
        <meta name="viewport" content={data.meta.viewport} />
      </Head>
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
    </>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  try {
    const filePath = path.join(process.cwd(), 'public', 'site-state.json');
    
    // Check if the file exists
    if (!fs.existsSync(filePath)) {
      // Return static data if no deployed data exists
      return {
        props: {
          websiteData: staticValue
        }
      };
    }

    // Read and parse the deployed data
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const websiteData = JSON.parse(fileContent);

    return {
      props: {
        websiteData
      }
    };
  } catch (error) {
    console.error('Error reading website data:', error);
    // Return static data as fallback in case of error
    return {
      props: {
        websiteData: staticValue
      }
    };
  }
}
