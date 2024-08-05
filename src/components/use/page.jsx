import Image from 'next/image';

export default function Use() {
  return (
    <div className="flex flex-col px-4 sm:px-6 lg:px-20 gap-y-10">
      <p className="text-3xl sm:text-4xl font-semibold text-center">
        How to use this mortgage calculator?
      </p>

      <div className="flex flex-col text-gray gap-y-3">
        <p>
          Play around with different home prices, locations, down payments,
          interest rates, and mortgage lengths to see how they impact your
          monthly mortgage payments.
        </p>
        <p>
          Increasing your down payment and decreasing your interest rate and
          mortgage term length will make your monthly payment go down. Taxes,
          insurance, and HOA fees will vary by location. If you enter a down
          payment amount that&apos;s less than 20% of the home price, private
          mortgage insurance (PMI) costs will be added to your monthly mortgage
          payment. As the costs of utilities can vary from county to county,
          we&apos;ve included a utilities estimate that you can break down by
          service. If you&apos;re thinking about buying a condo or into a
          community with a Homeowners Association (HOA), you can add HOA fees.
        </p>

        <p>
          The only amounts we haven&apos;t included are the money you&apos;ll
          need to save for annual home maintenance/repairs or the costs of home
          improvements. To see how much home you can afford including these
          costs, take a look at the Better home affordability calculator.
        </p>
        <p>
          Fun fact: Property tax rates are extremely localized, so two homes of
          roughly the same size and quality on either side of a municipal border
          could have very different tax rates. Buying in an area with a lower
          property tax rate may make it easier for you to afford a higher-priced
          home.
        </p>
      </div>

      <div className="flex flex-col gap-y-4">
        <p className="text-xl sm:text-2xl font-semibold">
          Do you know your property tax rate?
        </p>
        <p className="text-gray text-sm sm:text-base">
          While exact property tax rates vary by county, it can be helpful to
          look at taxes on the state level to get an idea for taxes in your state.
          Here&apos;s a helpful chart from Forbes breaking down the Census Bureau&apos;s
          2021 American Community Survey 5-year estimate:
        </p>
        <Image
          src="/table.png"
          alt="Property Tax Rates"
          className="w-full max-w-md mx-auto"
          width={600}  
          height={400} 
        />
      </div>

      <hr className="border-t border-gray-300 my-4" />
    </div>
  );
}
