import Image from "next/image";
import redball from "@/assets/junior/redball.png";
import orangeball from "@/assets/junior/OragneBall.png";

// Sample Data for Red and Orange Ball Levels
const ballData = [
  {
    type: "RedBall",
    image: redball, // Image for Red Ball
    levels: [
      {
        level: "Level 1",
        description: [
          "Ball goes over the net consistently with a parent",
          "Rallies are 5-10 ball exchanges",
          "Ball in front of body",
        ],
      },
      {
        level: "Level 2",
        description: [
          "Can rally against coach with 10-15 hits in a row",
          "Can control rallies with simple forehand/backhand",
          "Focus on better ball placement and control",
        ],
      },
      {
        level: "Level 3",
        description: [
          "Can rally against a wall or with a partner for 15-20 shots",
          "Can play mini matches in training conditions",
          "Start developing a stronger focus on consistency",
        ],
      },
    ],
  },
  {
    type: "OrangeBall",
    image: orangeball, // Image for Orange Ball
    levels: [
      {
        level: "Level 1",
        description: [
          "Players can rally using full stroke techniques",
          "Focus on proper grip, footwork, and placement",
          "Basic understanding of spin and angles",
        ],
      },
      {
        level: "Level 2",
        description: [
          "Players can rally across full court with reasonable speed",
          "Can serve and return serve with accuracy",
          "Can execute basic strategy with opponent",
        ],
      },
      {
        level: "Level 3",
        description: [
          "Players can rally using full stroke techniques and complete matches",
          "Players start to experiment with tactics and placements",
          "Focus on developing consistency and accuracy",
        ],
      },
    ],
  },
];

export default function RedAndOrangeBall() {
  return (
    <div className="max-w-[90rem] mx-auto px-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-gray-800 mb-4">
          Red and Orange Ball
        </h2>
        <p className="text-lg text-gray-600">
          Players are classified into Red Ball and Orange Ball categories based
          on their skill level. These balls help improve their technical and
          tactical skills at different stages of their tennis development.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-start gap-8 px-4 sm:px-6 md:px-8 py-8 sm:py-10 bg-white mb-12 rounded-lg">
        {/* Loop over each ball type (RedBall and OrangeBall) */}
        {ballData.map((ball, ballIndex) => (
          <div key={ballIndex} className="w-full lg:w-1/2">
            {/* Image Section */}
            <div className="mb-6">
              <Image
                src={ball.image} // Dynamically load the image for each ball type
                alt={`${ball.type} Ball`}
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>

            {/* Levels Section */}
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
              {ball.type === "RedBall" ? "Red Ball" : "Orange Ball"}
            </h3>
            {ball.levels.map((data, levelIndex) => (
              <div key={levelIndex} className="bg-gray-50 p-3 mb-2 rounded-lg ">
                <h4 className="text-xl  font-semibold mb-4">{data.level}</h4>
                <ul className="list-disc pl-5 text-base sm:text-lg">
                  {data.description.map((item, i) => (
                    <p key={i}>{item}</p>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
