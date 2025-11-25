import { ChevronRight } from "lucide-react"; // Import ChevronRight from Lucide React

// Define the component props interface with type safety
interface MyButtonProps {
  text: string; // Text of the button (string)
  onClick?: () => void; // Optional onClick handler (function)
}

const MyButton: React.FC<MyButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 bg-[#cedc1b] text-white rounded-full hover:bg-yellow-400 transition"
    >
      {text} {/* Dynamic text */}
      <ChevronRight className="inline-block w-5 h-5 ml-2" />{" "}
      {/* ChevronRight icon */}
    </button>
  );
};

export default MyButton;
