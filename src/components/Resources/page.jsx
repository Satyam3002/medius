import Image from "next/image";

export default function Resources() {
  return (
    <div className="flex flex-col gap-y-12 p-6 sm:p-10 lg:p-20">
      <p className="text-3xl sm:text-4xl font-semibold text-center">
        More resources
      </p>

      <div className="flex flex-col gap-y-8 lg:flex-row lg:gap-x-12 lg:gap-y-0">
        <div className="border p-4 rounded-lg space-y-4 flex flex-col justify-between w-full lg:w-4/12">
          <div className="flex items-center gap-x-2">
            <Image src="/task.png" alt="Task" width={48} height={48} />
          </div>
          <p className="text-lg font-medium">
            Get pre-approved to see how much you can borrow
          </p>
          <div className="flex items-center gap-x-2">
            <p className="text-xl font-semibold">Get started</p>
            <Image src="/right.png" alt="Right Arrow" width={48} height={48} />
          </div>
          <p className="text-sm text-gray-500">Won&apos;t impact your credit</p>
        </div>

        <div className="border p-4 rounded-lg space-y-4 flex flex-col justify-between w-full lg:w-4/12">
          <div className="flex items-center gap-x-2">
            <Image src="/decline.svg" alt="Decline" width={48} height={48} />
          </div>
          <p className="text-lg font-medium">See today&apos;s rates in your area</p>
          <div className="flex items-center gap-x-2">
            <p className="text-xl font-semibold">See rates</p>
            <Image src="/right.png" alt="Right Arrow" width={48} height={48} />
          </div>
          <p className="text-sm text-gray-500">Won&apos;t impact your credit</p>
        </div>

        <div className="border p-4 rounded-lg space-y-4 flex flex-col justify-between w-full lg:w-4/12">
          <div className="flex items-center gap-x-2">
            <Image src="/calc.png" alt="Calculator" width={48} height={48} />
          </div>
          <p className="text-lg font-medium">
            Find out your max homebuying budget
          </p>
          <div className="flex items-center gap-x-2">
            <p className="text-xl font-semibold">Try our mortgage calculator</p>
            <Image src="/right.png" alt="Right Arrow" width={48} height={48} />
          </div>
          <p className="text-sm text-gray-500">Won&apos;t impact your credit</p>
        </div>
      </div>

      <div className="flex flex-col gap-y-1 text-sm text-center">
        <p className="text-customGreen1 underline">
          *See Better Real Estate discount terms and conditions.
        </p>

        <p>
          **The average lifetime savings estimate is based on a comparison of
          the Freddie Mac Primary Mortgage Market Survey&apos;s (PMMS) 30-year
          fixed-rate mortgage product with Better Mortgage&apos;s own offered rate
          for a comparable mortgage product between Jan &apos;20 - Dec &apos;20. PMMS is
          based on conventional, conforming fully-amortizing home purchase loans
          for borrowers with a loan-to-value of 80 percent and with excellent
          credit. Better Mortgage&apos;s offered rate is based on pricing output for
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
