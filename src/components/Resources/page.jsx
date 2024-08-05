export default function Resources() {
    return (
      <div className="flex flex-col gap-y-12 p-6 sm:p-10 lg:p-20">
        <p className="text-3xl sm:text-4xl font-semibold text-center">
          More resources
        </p>
        
        <div className="flex flex-col gap-y-8 lg:flex-row lg:gap-x-12 lg:gap-y-0">
          <div className="border p-4 rounded-lg space-y-4 flex flex-col justify-between w-full lg:w-4/12">
            <div className="flex items-center gap-x-2">
              <img src="/task.png" alt="Task" className="w-12 h-12 sm:w-8 sm:h-8" />
            </div>
            <p className="text-lg font-medium">
              Get pre-approved to see how much you can borrow
            </p>
            <div className="flex items-center gap-x-2">
              <p className="text-xl font-semibold">Get started</p>
              <img src="/right.png" alt="Right Arrow" className="w-12 h-12 sm:w-8 sm:h-8" />
            </div>
            <p className="text-sm text-gray-500">Won’t impact your credit</p>
          </div>
  
          <div className="border p-4 rounded-lg space-y-4 flex flex-col justify-between w-full lg:w-4/12">
            <div className="flex items-center gap-x-2">
              <img src="/decline.svg" alt="Decline" className="w-12 h-12 sm:w-8 sm:h-8" />
            </div>
            <p className="text-lg font-medium">See today’s rates in your area</p>
            <div className="flex items-center gap-x-2">
              <p className="text-xl font-semibold">See rates</p>
              <img src="/right.png" alt="Right Arrow" className="w-12 h-12 sm:w-8 sm:h-8" />
            </div>
            <p className="text-sm text-gray-500">Won’t impact your credit</p>
          </div>
  
          <div className="border p-4 rounded-lg space-y-4 flex flex-col justify-between w-full lg:w-4/12">
            <div className="flex items-center gap-x-2">
              <img src="/calc.png" alt="Calculator" className="w-12 h-12 sm:w-8 sm:h-8" />
            </div>
            <p className="text-lg font-medium">
              Find out your max homebuying budget
            </p>
            <div className="flex items-center gap-x-2">
              <p className="text-xl font-semibold">Try our mortgage calculator</p>
              <img src="/right.png" alt="Right Arrow" className="w-12 h-12 sm:w-8 sm:h-8" />
            </div>
            <p className="text-sm text-gray-500">Won’t impact your credit</p>
          </div>
        </div>
  
        <div className="flex flex-col gap-y-1 text-sm text-center">
          <p className="text-customGreen1 underline">
            *See Better Real Estate discount terms and conditions.
          </p>
  
          <p>
            **The average lifetime savings estimate is based on a comparison of
            the Freddie Mac Primary Mortgage Market Survey’s (PMMS) 30-year
            fixed-rate mortgage product with Better Mortgage’s own offered rate
            for a comparable mortgage product between Jan ‘20 - Dec ‘20. PMMS is
            based on conventional, conforming fully-amortizing home purchase loans
            for borrowers with a loan-to-value of 80 percent and with excellent
            credit. Better Mortgage’s offered rate is based on pricing output for
            a 30-year fixed-rate mortgage product with a 30-day lock period for a
            single-family, owner-occupied residential property and a borrower with
            excellent (760 FICO) credit and a loan-to-value ratio of 80 percent.
            Individual savings could vary based on current market rates, property
            type, loan amount, loan-to-value, credit score, debt-to-income ratio
            and other variables.
          </p>
        </div>
      </div>
    );
  }
  