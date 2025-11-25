import TestimonialCard from "./TestimonialCard";

// Sample data (can be replaced with actual data from an API or database)
const testimonials = [
  {
    name: "Melissa Henry",
    location: "Jakarta",
    rating: 5,
    comment:
      "This platform makes it so easy to find courts and join games! Now I play every week with a growing group of friends!",
  },
  {
    name: "Melissa Henry",
    location: "Jakarta",
    rating: 4,
    comment:
      "I was new to padel and nervous at first, but the community was so friendly. Now I'm part of my favorite team!",
  },
  {
    name: "Melissa Henry",
    location: "Jakarta",
    rating: 5,
    comment:
      "The tournaments and events are top-notch. Great organizers, great people, and always fun to play!",
  },
  {
    name: "Melissa Henry",
    location: "Jakarta",
    rating: 5,
    comment:
      "I love how simple the booking system is. Just a few days ago, I managed to play. No more WhatsApp group chats!",
  },
  {
    name: "Melissa Henry",
    location: "Jakarta",
    rating: 4,
    comment:
      "I used to struggle finding people to play with. Since joining this platform, I've been playing almost every weekend.",
  },
  {
    name: "Melissa Henry",
    location: "Jakarta",
    rating: 5,
    comment:
      "The tournaments are very well-organized. Good courts, nice people, and great people to compete with. It's the best place!",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 px-6 md:px-16 bg-gray-50 max-w-[90rem] mx-auto">
      <h2 className="text-3xl font-extrabold mb-8">What our members say</h2>
      <p className="text-lg text-gray-700 mb-8">
        Hear directly from the players who make up our growing padel community.
        From beginners to seasoned competitors.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            name={testimonial.name}
            location={testimonial.location}
            rating={testimonial.rating}
            comment={testimonial.comment}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
