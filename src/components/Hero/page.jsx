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
                        <img src="/stopwatch.png" alt="Stopwatch Icon" className="h-4 w-4" />
                        <p>3 min | No credit impact</p>
                    </div>
                </div>

                {/* Google Reviews Section */}
                <div className="flex flex-col items-center space-y-4">
                    <div className="flex items-center space-x-4">
                        <img src="/google.svg" alt="Google Logo" className="w-12 h-12" />
                        <div className="flex space-x-1">
                            <img src="/star.png" alt="Full Star" className="w-6 h-6" />
                            <img src="/star.png" alt="Full Star" className="w-6 h-6" />
                            <img src="/star.png" alt="Full Star" className="w-6 h-6" />
                            <img src="/star.png" alt="Full Star" className="w-6 h-6" />
                            <img src="/halfstar.png" alt="Half Star" className="w-6 h-6" />
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
