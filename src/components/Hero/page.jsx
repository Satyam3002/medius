import Image from 'next/image'; // Import Image from Next.js for optimization

export default function Hero() {
    return (
        <section className="py-36 bg-customGreen">
            {/* Title Section */}
            <header className="text-6xl md:text-8xl text-textGreen font-bold flex flex-col items-center justify-center space-y-4">
                <div>Mortgages</div>
                <div>made simple</div>
            </header>

            <div className="flex flex-col md:flex-row justify-around mt-16 space-y-8 md:space-y-0">
                {/* Start Approval Section */}
                <div className="flex flex-col space-y-2 justify-center items-center">
                    <button className="px-16 py-4 text-lg bg-textGreen rounded-full hover:bg-customBlueDark text-black">
                        Start my approval
                    </button>
                    <div className="flex justify-center gap-x-2 items-center text-white text-sm">
                        <Image src="/stopwatch.png" alt="Stopwatch Icon" width={16} height={16} />
                        <p>3 min | No credit impact</p>
                    </div>
                </div>

                {/* Google Reviews Section */}
                <div className="flex flex-col items-center space-y-4">
                    <div className="flex items-center space-x-4">
                        <Image src="/google.svg" alt="Google Logo" width={48} height={48} />
                        <div className="flex space-x-1">
                            <Image src="/star.png" alt="Full Star" width={24} height={24} />
                            <Image src="/star.png" alt="Full Star" width={24} height={24} />
                            <Image src="/star.png" alt="Full Star" width={24} height={24} />
                            <Image src="/star.png" alt="Full Star" width={24} height={24} />
                            <Image src="/halfstar.png" alt="Half Star" width={24} height={24} />
                        </div>
                    </div>
                    <div className="text-xs text-white">
                        <p>4.6 Stars | 3177 Google reviews</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
