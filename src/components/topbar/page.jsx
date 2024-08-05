import Image from 'next/image';

export default function Topbar() {
  return (
    <div className="py-8 px-32">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <p className="font-bold text-lg text-customGreen1">Better</p>
          <p className="font-medium">Mortgage</p>
        </div>
        <div>
          <Image src="/phn.svg" alt="Phone icon" width={32} height={32} />
          <p className="text-lg">Need help? Call (415) 523 8837</p>
        </div>
      </div>
      <div>
        <Image src="/betty.png" alt="Betty image" layout="intrinsic" />
      </div>
    </div>
  );
}
