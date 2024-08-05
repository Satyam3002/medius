import Image from 'next/image'; // Import Image from Next.js for optimization

export default function Hero1() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-around gap-y-8 md:gap-x-24 py-8">
      {/* Left Section: Image and Tags */}
      <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
        <Image src="/userimg.png" alt="User" width={150} height={150} className="mb-4" />
        <div className="flex flex-col md:flex-row items-center md:items-start gap-y-4 md:gap-x-4">
          <div className="p-3 px-6 rounded-full border border-black hover:border-customGreen hover:border-4 transition-all">
            Arian
          </div>
          <div className="p-3 px-6 rounded-full border border-black hover:border-customGreen hover:border-4 transition-all">
            Amanda
          </div>
          <div className="p-3 px-6 rounded-full border border-black hover:border-customGreen hover:border-4 transition-all">
            Paul
          </div>
        </div>
      </div>

      {/* Right Section: Text and Button */}
      <div className="flex flex-col space-y-8 items-center md:items-start">
        <div className="text-4xl md:text-6xl font-bold text-center md:text-left">
          Find out why
        </div>
        <div className="text-4xl md:text-6xl font-bold text-center md:text-left">
          we're better
        </div>
        <button className="px-8 py-4 text-base bg-customGreen text-white rounded-full hover:bg-customBlueDark">
          See all our stories
        </button>
        <div className="font-bold text-center md:text-left">
          <p className="inline-block font-semibold mr-4">Trustpilot</p>
          <p className="inline-block text-gray-500">Excellent 4.3 out of 5</p>
        </div>
      </div>
    </div>
  );
}
