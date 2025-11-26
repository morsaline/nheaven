import image1 from "@/assets/Tennis/tennis1.png"; // Replace with actual images
import image2 from "@/assets/Tennis/tennis2.png"; // Replace with actual images
import image3 from "@/assets/Tennis/tennis3.png"; // Replace with actual images
import StoryCard from "../StoryCard";

const OurStory = () => {
  const storyData = [
    {
      image: image1, // Image for Humble Beginnings
      title: "Humble Beginnings",
      description:
        "Raleigh Racquet Club was established on September 11, 1980 with the goal of bringing the finest tennis and tennis-related facilities to North Carolina. Patients enrolled in our programs began receiving personalized and individualized training to help them reach their full potential.",
    },
    {
      image: image2, // Image for Growing Stronger
      title: "Growing Stronger",
      description:
        "We first opened in September of 1981 and expanded our first two courts and top practice facility. Since then, we’ve made significant renovations and improvements, including adding the new 1971 USTA Court Championships.",
    },
    {
      image: image3, // Image for National Recognition
      title: "National Recognition",
      description:
        "Today, the club has grown with many more courts available, more high-performance players, and other amenities that have made us a world-renowned tennis club.",
    },
    {
      image: image3, // Image for National Recognition
      title: "National Recognition",
      description:
        "Today, the club has grown with many more courts available, more high-performance players, and other amenities that have made us a world-renowned tennis club.",
    },
  ];

  return (
    <section className="max-w-[90rem] mx-auto px-16 py-8">
      <div className="text-center mb-20">
        {" "}
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">About RRC</h2>
        <p className="text-base text-gray-600 leading-relaxed">
          Raleigh Racquet Club is a community-focused tennis and fitness
          destination offering top facilities, expert coaching, and a welcoming
          environment for players of all ages and levels. We&#39;re a club built
          around a love for tennis, active living, and meaningful connections.
          From our courts to our fitness center and social spaces, everything is
          designed to help members play, train, and enjoy their time.
        </p>
      </div>
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
        Our Story
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-6">
        {storyData.map((story, index) => (
          <StoryCard
            key={index}
            image={story.image}
            title={story.title}
            description={story.description}
          />
        ))}
      </div>
    </section>
  );
};

export default OurStory;
