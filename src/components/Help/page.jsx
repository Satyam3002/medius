import Image from 'next/image';

export default function Help() {
    return (
        <section className="flex flex-col p-6 sm:p-12 lg:p-24">
            {/* Section: How does a mortgage calculator help me? */}
            <article className="flex flex-col gap-y-10">
                <p className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                    How does a mortgage calculator help me?
                </p>
                <p className="text-gray text-base sm:text-lg">
                    When deciding how much house you can afford, one of the most important
                    pieces to determine is whether a home will fit into your monthly
                    budget. A mortgage calculator helps you understand the monthly cost of
                    a home. And ours will allow you to enter different down payments and
                    interest rates to help determine what is affordable for you.
                </p>
                <hr className="border-t border-gray1 my-4" />
            </article>

            {/* Section: How much monthly mortgage payment can I afford? */}
            <article className="flex flex-col gap-y-10">
                <p className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                    How much monthly mortgage payment can I afford?
                </p>
                <p className="text-gray text-base sm:text-lg">
                    Lenders determine how much you can afford on a monthly housing payment
                    by calculating your debt-to-income ratio (DTI). The maximum DTI you
                    can have in order to qualify for most mortgage loans is often between
                    45-50%, with your anticipated housing costs included.
                </p>
                <p className="text-gray text-base sm:text-lg">
                    Your DTI is the balance between your income and your debt. It helps
                    lenders understand how safe or risky it is for them to approve your
                    loan. A DTI ratio represents how much of your gross monthly income is
                    spoken for by creditors, and how much of it is left over to you as
                    disposable income. It&apos;s most commonly written as a percentage. For
                    example, if you pay half your monthly income in debt payments, you
                    would have a DTI of 50%.
                </p>
                <div className="flex flex-col gap-y-4 px-6 sm:px-12 lg:px-24">
                    <p className="text-base sm:text-lg">
                        Formula for calculating your debt-to-income (DTI) ratio:
                    </p>
                    <div className="flex flex-col lg:flex-row items-center justify-center text-2xl sm:text-3xl md:text-4xl rounded-xl text-customGreen gap-x-4 p-3 bg-gray1">
                        <div className="flex flex-col gap-y-2">
                            <p>Monthly Debt Payments</p>
                            <hr className="border-t" />
                            <p>Monthly Gross Income</p>
                        </div>
                        <div className="pb-4 flex items-center gap-x-4">
                            <p> x </p>
                            <p>100 </p>
                            <p>=</p>
                            <p>Debt-to-income Ratio</p>
                        </div>
                    </div>
                    <p className="text-base sm:text-lg">Here&apos;s an example of what calculating your DTI might look like:</p>
                    <Image src="/dti.png" alt="DTI Example" width={800} height={400} className="w-full sm:w-3/4 md:w-1/2" />
                </div>
                <hr className="border-t border-gray1 my-4" />
            </article>

            {/* Section: How to calculate monthly mortgage payments? */}
            <article className="flex flex-col gap-y-8">
                <p className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                    How to calculate monthly mortgage payments?
                </p>
                <p className="text-gray text-base sm:text-lg">
                    Your monthly mortgage payment includes loan principal and interest,
                    property taxes, homeowners insurance, and mortgage insurance (PMI), if
                    applicable. While not typically included in your mortgage payment,
                    homeowners also pay monthly utilities and sometimes pay homeowners
                    association (HOA) fees, so it&apos;s a good idea to factor these into your
                    monthly budget. This mortgage calculator factors in all these typical
                    monthly costs so you can really crunch the numbers.
                </p>
                <p className="text-xl sm:text-2xl font-semibold">
                    Formula for calculating monthly mortgage payments
                </p>
                <p className="text-gray text-base sm:text-lg">
                    The easiest way to calculate your mortgage payment is to use a
                    calculator, but for the curious or mathematically inclined, here&apos;s the
                    formula for calculating principal and interest yourself:
                </p>
                <div className="flex flex-col items-center justify-center">
                    <Image src="/mp.png" alt="Mortgage Payment Formula" width={800} height={400} className="w-full sm:w-3/4 md:w-1/2" />
                    <div className="p-4">
                        <ul className="list-disc pl-6 space-y-4 text-base sm:text-lg">
                            <li>
                                <strong>M:</strong> Monthly mortgage payments
                            </li>
                            <li>
                                <strong>P:</strong> Principal loan amount (the amount you borrow)
                            </li>
                            <li>
                                <strong>r:</strong> Monthly interest rate (annual interest rate
                                divided by 12 and expressed as a decimal)
                                <ul className="list-disc pl-6">
                                    <li>
                                        For example, if the annual interest rate is 5%, the monthly
                                        rate would be <code>0.05 / 12 = 0.00417</code>, or 0.417%
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <strong>n:</strong> Total number of payments in months
                                <ul className="list-disc pl-6">
                                    <li>
                                        For example, for a 30-year loan,{" "}
                                        <code>n = 30 x 12 = 360</code> months
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="text-base sm:text-lg">Here&apos;s a simple example:</p>
                    <Image src="/ssi.png" alt="Simple Example" width={800} height={400} className="w-full sm:w-3/4 md:w-1/2" />
                </div>
                <p className="text-gray text-base sm:text-lg">
                    This formula assumes a fixed-rate mortgage, where the interest rate remains constant throughout 
                    the loan term. And remember, you&apos;ll still need to add on taxes, insurance,
                    utilities, and HOA fees if applicable.
                </p>
                <hr className="border-t border-gray1 my-4" />
            </article>
        </section>
    );
}
