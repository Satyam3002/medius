import Image from 'next/image';

export default function Users1() {
  return (
    <div className="py-16 px-4">
      <div className="flex flex-col gap-y-8 items-center justify-center">
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-4xl md:text-6xl font-bold">Hi, I&apos;m Betty!</p>
          <p className="text-4xl md:text-6xl font-bold">What can I help you with?</p>
        </div>

        <div className="flex flex-col gap-y-4 w-full max-w-md">
          <div className="flex items-center justify-center py-2 pl-6 pr-4 gap-x-4 border border-t rounded-xl w-full h-20">
            <Image src="/home.svg" alt="Buying a home" width={40} height={40} />
            <p className="text-center">Buying a home</p>
          </div>
          <div className="flex items-center justify-center py-2 pl-6 pr-4 gap-x-4 border border-t rounded-xl w-full h-20">
            <Image src="/home.svg" alt="Refinance my mortgage" width={40} height={40} />
            <p className="text-center">Refinance my mortgage</p>
          </div>
          <div className="flex items-center justify-center py-2 pl-6 pr-4 gap-x-4 border border-t rounded-xl w-full h-20">
            <Image src="/home.svg" alt="Get cash from my home" width={40} height={40} />
            <p className="text-center">Get cash from my home</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-y-8 md:gap-x-24 items-center justify-center mt-8 w-full max-w-md">
          <div className="flex flex-col text-2xl md:text-4xl font-bold items-center">
            <p>$100B</p>
            <p className="text-sm text-gray md:text-base text-gray-600 text-center">
              Home loans funded entirely online
            </p>
          </div>
          <div className="flex flex-col text-2xl md:text-4xl font-bold items-center">
            <p>400K</p>
            <p className="text-sm text-gray md:text-base text-gray-600 text-center">
              Customers who chose a Better Mortgage
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
