import TeamCard from "../TeamCard";
import man from "@/assets/Tennis/tennisplayer.png"; // Assuming the image is stored here

const TeamMembers = () => {
  const teamData = [
    {
      image: man, // Replace with the actual image path or URL
      name: "Timmer Halligan",
      title: "General Manager",
      experience:
        "Playing experience: Bachelor's in University, Kentucky State High School Tennis",
      hometown: "Louisville, USA", // New hometown field
    },
    {
      image: man, // Replace with the actual image path or URL
      name: "Timmer Halligan",
      title: "General Manager",
      experience:
        "Playing experience: Bachelor's in University, Kentucky State High School Tennis",
      hometown: "Louisville, USA", // New hometown field
    },
    {
      image: man, // Replace with the actual image path or URL
      name: "Timmer Halligan",
      title: "General Manager",
      experience:
        "Playing experience: Bachelor's in University, Kentucky State High School Tennis",
      hometown: "Louisville, USA", // New hometown field
    },
    {
      image: man, // Replace with the actual image path or URL
      name: "Timmer Halligan",
      title: "General Manager",
      experience:
        "Playing experience: Bachelor's in University, Kentucky State High School Tennis",
      hometown: "Louisville, USA", // New hometown field
    },

    // Add more members here
  ];

  return (
    <section className="max-w-[90rem] mx-auto px-16">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          A team like no other
        </h2>
        <p className="text-gray-600 text-sm">
          The Raleigh Racquet Club Staff is dedicated to providing our members a
          world class experience each and every time they are at the club. We
          strive to create a memorable experience for our members and their
          family’s. We pledge to provide the finest facilities, instruction and
          programs and our committed to promoting the growth of tennis in
          Raleigh.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2  gap-6">
        {teamData.map((member, index) => (
          <TeamCard
            key={index}
            image={member.image}
            name={member.name}
            title={member.title}
            experience={member.experience}
            hometown={member.hometown} // Passing hometown prop
          />
        ))}
      </div>
    </section>
  );
};

export default TeamMembers;
