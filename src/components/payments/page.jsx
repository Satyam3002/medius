export default function Payments() {
  return (
    <div className=" flex flex-col gap-y-10 px-20">
      <div className="flex flex-col gap-y-10">
        <p className="text-4xl font-semibold">
          How to reduce your monthly mortgage payments?
        </p>
        <p className="text-gray">
          The lower the purchase price of the home, the lower your loan amount
          will be. But if the seller is less than willing to cut you a deal, you
          have other options.
        </p>
        <p className="text-2xl font-semibold">
          Extend the length of your mortgage
        </p>
        <p className="text-gray">
          The more time you have to pay off the mortgage, the less each monthly
          mortgage payment will be. (In lender-speak, ‘extending the length of
          your mortgage’ is known as ‘increasing your loan term’.) This is why
          people often choose a 30-year fixed rate mortgage over one with a 15-
          or 20-year term.
        </p>

        <p className="text-2xl font-semibold">Increase your down payment</p>

        <p className="text-gray">
          The smaller the amount of your mortgage, the smaller your monthly
          mortgage payments will be. If you’re able to put at least 20% of the
          home price towards your down payment, you’ll be able to avoid PMI
          (private mortgage insurance). Even if you can’t afford a complete 20%
          down payment, boosting your down payment will help you get PMI removed
          sooner. In fact, boosting your down payment by 5% can lower your
          monthly PMI fees.
        </p>
        <div className="flex text-gray flex-col gap-y-2">
          <p className="text-2xl text-black font-semibold">
            Get a lower interest rate
          </p>

          <p>
            Increasing your down payment can be one way to help you qualify for
            a lower interest rate. The amount of your down payment compared to
            the total amount of the loan is called your loan-to-value ratio
            (LTV).
          </p>
          <p>
            Depending on your loan amount, a lower LTV may increase the
            likelihood of you being offered a low interest rate. If you intend
            on keeping your home for a while, you could consider buying points
            to reduce your interest rate. Buying points essentially means you
            agree to pay more upfront costs in exchange for a lower monthly
            payment.
          </p>
          <p>
            If you think you may sell or refinance the home in the first 5-10
            years of the mortgage, you could consider an adjustable-rate
            mortgage (ARM). An ARM offers a lower fixed interest rate for a set
            introductory period—typically 5, 7, or 10 years. Once the set
            introductory period ends, the interest rate adjusts (interest rate
            may increase after consummation). The introductory interest rate for
            ARMs is typically lower than the interest rate for a conventional
            fixed-rate mortgage which could make it a great way to save on
            interest if you know you won’t keep the mortgage for long.
          </p>
          <p>
            {" "}
            If you’re not planning on buying a home for a while, improving your
            credit score is a tried and true way of increasing your chances of
            qualifying for a lower interest rate. By reducing your
            debt-to-income ratio (DTI), lenders will see that you comfortably
            afford your mortgage and may be more willing to offer a lower
            interest rate.
          </p>
        </div>
        <hr className="border-t border-gray1  my-4" />
      </div>

      <div className="flex flex-col gap-y-10">
        <p className="text-4xl font-semibold">How much home can I afford?</p>
        <p className="text-gray">
          Once again, the easiest way to do this is with a calculator! To know
          if a home is in your budget, try out our home affordability
          calculator. This calculator will take a few inputs from you, like
          income and savings, and let you know the maximum amount of home you
          can afford.
        </p>
        <hr className="border-t border-gray1  my-4" />
      </div>

      <div className="flex flex-col gap-y-10">
        <p className="text-4xl font-semibold">Next steps to buying a house</p>
        <div className="flex text-gray flex-col gap-y-3">
          <p className="">
            There are 8 steps to buying a house and by using this calculator
            you’ve completed step 2 (calculating your home affordability) and
            maybe even step 1 (getting your finances in order).
          </p>
          <p>
          The next step is getting pre-approved. A mortgage pre-approval with Better Mortgage takes as little as 3-minutes and doesn’t 
          impact your credit score. It’s a free, no-commitment way to see how much home you can buy, the mortgages you qualify for, 
          and the range of interest rates you’ll be offered.
          </p>
          <p>
          If you’re ready to buy a home now, our definitive home buying checklist can walk you through everything you need
           to know to get the home you want. With your Better Mortgage pre-approval letter in hand, you’ll be able to show 
           sellers and real estate agents that you mean business—giving you an edge over homebuyers that don’t have this kind
            of proof that they’re financially ready to purchase. And by working with
           an agent from Better Real Estate and funding with Better Mortgage, you’ll save $2,000 on closing costs,
            and save up to $8,200 on average over the life of your loan.** 
          </p>
        </div>

        <hr className="border-t border-gray1  my-4" />
      </div>
    </div>
  );
}
