export default function Timeline() {
    return (
      <div className="flex flex-col pt-24 px-6 sm:px-12 lg:px-52 gap-y-6">
        <div className="flex items-center justify-center mb-12">
          <p className="text-3xl sm:text-4xl font-bold">Company Timeline</p>
        </div>
  
        <div className="flex flex-row lg:flex-row items-start gap-x-1 lg:gap-x-6 gap-y-12 lg:gap-y-0 h-auto lg:h-[84rem]">
          
          <div className="flex flex-col gap-y-12 lg:gap-y-24 w-full lg:w-2/5">
            <TimelineEvent text="After Vishal Garg’s first attempt to purchase his own dream home, he quickly realized that the homebuying process is unnecessarily broken. This inspired him to found a technology-first company led by engineers and data experts with the mission of digitizing and automating home finance to make it cheaper, easier, and faster for all." />
            <TimelineEvent text="Better Mortgage becomes a Fannie Mae approved seller + servicer and establishes relationships with top mortgage investors." />
            <TimelineEvent text="Better Mortgage partners with Ally Bank to build Ally powered by Better." />
            <TimelineEvent text="Better acquires Trussle — The UK’s most innovative online mortgage broker." />
            <TimelineEvent text="Better Mortgage launches One Day Mortgage¹: The first offering to customers to go from application to full mortgage Commitment Letter within 24 hours vs. typical industry process of 30+ days." />
            <TimelineEvent text="Better Mortgage launches One Day Verified Approval Letter." />
          </div>
  
          <div className="border-l-4 border-gray1 h-auto lg:h-full w-full lg:w-1 border-t-0 lg:border-t-0"></div>
  
          <div className="flex flex-col gap-y-12 lg:gap-y-24 w-full lg:w-2/5 mt-48 lg:mt-52">
            <TimelineEvent text="Better Mortgage funds its first mortgage loan entirely online (without a single phone call!)." />
            <TimelineEvent text="Better expands into the real estate market with Better Real Estate." />
            <TimelineEvent text="Better Mortgage launches its pilot partnership with American Express to deliver a seamless homebuying experience to AMEX customers." />
            <TimelineEvent text="Better Mortgage becomes the first fintech to fund $100B home loans entirely online." />
            <TimelineEvent text="Better Mortgage launches the fully digital 3-day HELOC²." />
            <TimelineEvent text="You become part of the story by joining tens of thousands of happy Better Mortgage borrowers." />
          </div>
        </div>
      </div>
    );
  }
  
  function TimelineEvent({ text }) {
    return (
      <div className="p-4 text-center bg-gray1 rounded-xl shadow-lg">
        {text}
      </div>
    );
  }
  