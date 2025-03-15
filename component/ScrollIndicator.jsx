export default function ScrollIndicator() {
  return (
    <div className="flex flex-col items-center text-center text-gray-700 text-xs capitalize pt-8 cursor-pointer">
      <div className="flex justify-center items-center w-10 h-18 border-3 border-gray-500/30 rounded-[30px]">
        <div className="w-4 h-4 bg-gradient-to-b from-gray-400 to-gray-500 rounded-full animate-scroll"></div>
      </div>
      <span className="mt-2">Scroll Down</span>
    </div>
  );
}
