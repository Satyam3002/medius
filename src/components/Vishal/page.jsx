export default function Vishal() {
    return (
        <div className="flex flex-col md:flex-row p-8 md:p-48 items-center justify-center">
            {/* Left Side Content */}
            <div className="flex flex-col gap-y-5 w-full md:w-1/2 md:pr-8">
                <div className="text-2xl md:text-4xl font-bold">
                    <p>The status quo is broken</p>
                </div>
                <div className="text-gray text-base mt-4">
                    <p>
                        The traditional processes around homeownership are opaque and stressful. Fees aren’t transparent and some are simply
                        outrageous in size. Traditional mortgage lending is rife with unnecessary fees and slow, painful processes. It’s a system
                        set up to benefit insiders — not you. Better.com CEO, Vishal Garg, set out to change that.
                    </p>
                </div>
                <div className="mt-4">
                    <button className="px-6 md:px-8 bg-customGreen1 text-white text-base py-3 md:py-4 rounded-xl hover:bg-customBlueDark">
                        Read Vishal&apos;s story
                    </button>
                </div>
            </div>

            <div className="w-full md:w-1/2 md:pl-8 mt-8 md:mt-0">
                <iframe
                    className="w-full h-[200px] md:h-[315px] rounded-xl"
                    src="https://www.youtube.com/embed/1KjYlLBM9j4"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}
