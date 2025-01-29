import { useForm, useWatch } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { updateWebsiteData } from "@/store/editorSlice";
import { useEffect } from "react";

export default function OptionsPanel() {
  const dispatch = useAppDispatch();
  const websiteData = useAppSelector((state) => state.editor.websiteData);
  const { register, control } = useForm({
    defaultValues: websiteData,
  });

  // Watch for form changes and update Redux in real-time
  const formValues = useWatch({ control });
  useEffect(() => {
    if (formValues) {
      console.log(formValues);
      dispatch(updateWebsiteData({
        meta: {
          title: formValues.meta?.title || "",
          viewport: formValues.meta?.viewport || ""
        },
        hero: {
          backgroundImage: formValues.hero?.backgroundImage || "",
          title: formValues.hero?.title || "",
          subtitle: formValues.hero?.subtitle || "",
          date: formValues.hero?.date || "",
          overlayOpacity: formValues.hero?.overlayOpacity || ""
        },
        ourStory: {
          title: formValues.ourStory?.title || "",
          content: formValues.ourStory?.content || "",
          image: formValues.ourStory?.image || ""
        },
        timeline: {
          title: formValues.timeline?.title || "",
          events: []
          // events: formValues.timeline?.events || []
        },
        eventDetails: {
          title: formValues.eventDetails?.title || "",
          ceremony: {
            title: formValues.eventDetails?.ceremony?.title || "", 
            time: formValues.eventDetails?.ceremony?.time || "", 
            location: formValues.eventDetails?.ceremony?.location || "", 
            address: formValues.eventDetails?.ceremony?.address || "",
            date: formValues.eventDetails?.ceremony?.date || ""
          },
          reception: {
            title: formValues.eventDetails?.reception?.title || "", 
            time: formValues.eventDetails?.reception?.time || "", 
            location: formValues.eventDetails?.reception?.location || "", 
            address: formValues.eventDetails?.reception?.address || "",
            date: formValues.eventDetails?.reception?.date || ""
          },
          afterParty: {
            title: formValues.eventDetails?.afterParty?.title || "", 
            time: formValues.eventDetails?.afterParty?.time || "", 
            location: formValues.eventDetails?.afterParty?.location || "", 
            address: formValues.eventDetails?.afterParty?.address || "",
            date: formValues.eventDetails?.afterParty?.date || ""
          }
        },
        photoGallery: {
          title: formValues.photoGallery?.title || "",
          // images: formValues.photoGallery?.images || []
          images: []
        },
        gifts: {
          title: formValues.gifts?.title || "",
          description: formValues.gifts?.description || "",
          // registries: formValues.gifts?.registries || []
          registries: []
        },
        rsvp: {
          title: formValues.rsvp?.title || "",
          description: formValues.rsvp?.description || "",
          deadline: formValues.rsvp?.deadline || ""
        },
        footer: {
          message: formValues.footer?.message || "",
          hashtag: formValues.footer?.hashtag || ""
        }
      }));
    }
  }, [formValues, dispatch]);

  return (
    <div className="h-full bg-white border-l border-gray-200 overflow-y-auto p-4">
      <form className="space-y-8">
        {/* Hero Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Hero Section</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Background Image URL</label>
              <input
                type="text"
                {...register("hero.backgroundImage")}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                {...register("hero.title")}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Subtitle</label>
              <input
                type="text"
                {...register("hero.subtitle")}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Date</label>
              <input
                type="text"
                {...register("hero.date")}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        <hr className="border-gray-200" />

        {/* Our Story Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Story</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                {...register("ourStory.title")}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Content</label>
              <textarea
                {...register("ourStory.content")}
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Image URL</label>
              <input
                type="text"
                {...register("ourStory.image")}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        <hr className="border-gray-200" />

        {/* Timeline Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Timeline</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                {...register("timeline.title")}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            {/* Timeline Events */}
            {websiteData.timeline.events.map((_, index) => (
              <div key={index} className="space-y-2 p-4 border rounded-md">
                <h4 className="font-medium">Event {index + 1}</h4>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Date</label>
                  <input
                    type="text"
                    {...register(`timeline.events.${index}.date`)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Title</label>
                  <input
                    type="text"
                    {...register(`timeline.events.${index}.title`)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Description</label>
                  <textarea
                    {...register(`timeline.events.${index}.description`)}
                    rows={2}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-gray-200" />

        {/* Event Details Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Event Details</h3>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                {...register("eventDetails.title")}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            {/* Ceremony */}
            <div className="space-y-4 p-4 border rounded-md">
              <h4 className="font-medium">Ceremony</h4>
              <div>
                <label className="block text-sm font-medium text-gray-700">Time</label>
                <input
                  type="text"
                  {...register("eventDetails.ceremony.time")}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Location</label>
                <input
                  type="text"
                  {...register("eventDetails.ceremony.location")}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <textarea
                  {...register("eventDetails.ceremony.address")}
                  rows={2}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
            {/* Reception */}
            <div className="space-y-4 p-4 border rounded-md">
              <h4 className="font-medium">Reception</h4>
              <div>
                <label className="block text-sm font-medium text-gray-700">Time</label>
                <input
                  type="text"
                  {...register("eventDetails.reception.time")}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Location</label>
                <input
                  type="text"
                  {...register("eventDetails.reception.location")}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <textarea
                  {...register("eventDetails.reception.address")}
                  rows={2}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-200" />

        {/* Photo Gallery Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Photo Gallery</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                {...register("photoGallery.title")}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            {/* Gallery Images */}
            {websiteData.photoGallery.images.map((_, index) => (
              <div key={index} className="space-y-2 p-4 border rounded-md">
                <h4 className="font-medium">Image {index + 1}</h4>
                <div>
                  <label className="block text-sm font-medium text-gray-700">URL</label>
                  <input
                    type="text"
                    {...register(`photoGallery.images.${index}`)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-gray-200" />

        {/* Gifts Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Gifts</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                {...register("gifts.title")}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                {...register("gifts.description")}
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            {/* Registries */}
            {websiteData.gifts.registries.map((_, index) => (
              <div key={index} className="space-y-2 p-4 border rounded-md">
                <h4 className="font-medium">Registry {index + 1}</h4>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    {...register(`gifts.registries.${index}.name`)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">URL</label>
                  <input
                    type="text"
                    {...register(`gifts.registries.${index}.url`)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-gray-200" />

        {/* RSVP Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">RSVP</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                {...register("rsvp.title")}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                {...register("rsvp.description")}
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Deadline</label>
              <input
                type="text"
                {...register("rsvp.deadline")}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        <hr className="border-gray-200" />

        {/* Footer Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Footer</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                {...register("footer.message")}
                rows={2}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Hashtag</label>
              <input
                type="text"
                {...register("footer.hashtag")}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
