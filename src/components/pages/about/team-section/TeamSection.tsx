import image1 from "@/assets/Tennis/tennis1.png"; // Replace with actual image paths
import image2 from "@/assets/Tennis/tennis1.png"; // Replace with actual image paths
import image3 from "@/assets/Tennis/tennis1.png"; // Replace with actual image paths
// Replace with actual image paths
import TeamMemberCard from "../TeamMemberCard";

const TeamSection = () => {
  const teamData = [
    {
      image: image1,
      name: "Paul Goode",
      title: "Director of Tennis",
      description:
        "Paul has over 20 years of experience in the tennis industry, specializing in coaching and player development. He focuses on creating a positive and supportive environment for all players.",
    },
    {
      image: image2,
      name: "Andrea Terril",
      title: "Director of Tennis",
      description:
        "Andrea brings a wealth of experience with over 15 years in the tennis world, providing expert coaching and leadership to help players excel at all levels.",
    },
    {
      image: image3,
      name: "Paul Goode",
      title: "Director of Tennis",
      description:
        "Paul has over 20 years of experience in the tennis industry, specializing in coaching and player development. He focuses on creating a positive and supportive environment for all players.",
    },
    {
      image: image2,
      name: "Andrea Terril",
      title: "Director of Tennis",
      description:
        "Andrea brings a wealth of experience with over 15 years in the tennis world, providing expert coaching and leadership to help players excel at all levels.",
    },
  ];

  return (
    <section className="max-w-[90rem] mx-auto px-16 py-8">
      <div className="text-center mb-10">
        {" "}
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Meet the team
        </h2>
        <p className="text-base text-gray-600 leading-relaxed">
          Raleigh Racquet Club is a community-focused tennis and fitness
          destination offering top facilities, expert coaching, and a welcoming
          environment for players of all ages and levels. We&#39;re a club built
          around a love for tennis, active living, and meaningful connections.
          From our courts to our fitness center and social spaces, everything is
          designed to help members play, train, and enjoy their time.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 bg-yellow-100 p-8 rounded-lg">
        {teamData.map((member, index) => (
          <TeamMemberCard
            key={index}
            image={member.image}
            name={member.name}
            title={member.title}
            description={member.description}
          />
        ))}
        <button className="flex gap-4 items-center justify-center max-w-44 rounded-lg bg-white py-2 px-4 text-center hover:text-green-600">
          See all Our Stuff
        </button>
      </div>
    </section>
  );
};

export default TeamSection;
