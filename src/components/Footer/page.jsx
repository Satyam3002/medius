import Link from "next/link";

export default function Footer() {
  return (
    <div className="py-8 px-4 sm:px-8 lg:px-20">
      <div className="text-4xl py-8 font-bold text-customGreen">
        <p>Better</p>
      </div>

      <div className="flex flex-col lg:flex-row lg:space-x-4">
        <div className="flex flex-col gap-y-4 flex-1 min-w-[250px] mb-8 lg:mb-0">
          <p>
            Better is a family of companies serving all your homeownership
            needs.
          </p>
          <div className="flex flex-col gap-y-2">
            {[
              {
                title: "Mortgage",
                description:
                  "We can’t wait to say “Welcome home.” Apply 100% online, with expert customer support.",
              },
              {
                title: "Real Estate",
                description:
                  "Connect with a local Better Real Estate Partner Agent to find out all the ways you can save.",
              },
              {
                title: "Cover",
                description:
                  "Shop, bundle, and save on insurance coverage for home, auto, life, and more.",
              },
              {
                title: "Inspect",
                description:
                  "Get free repair estimates, 24-hour turnarounds on reports, and rest easy with our 100-day inspection guarantee.",
              },
              {
                title: "Settlement Services",
                description:
                  "Get transparent rates when you shop for title insurance all in one convenient place.",
              },
            ].map(({ title, description }) => (
              <div key={title} className="flex flex-col gap-y-2">
                <div className="flex gap-x-1 text-2xl">
                  <p className="inline-block text-customGreen font-bold">
                    Better
                  </p>
                  <p className="inline-block text-gray font-semibold">
                    {title}
                  </p>
                </div>
                <div>
                  <p className="text-sm">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col text-base gap-y-4 flex-1 min-w-[200px] mb-8 lg:mb-0">
          <p className="font-bold text-xl">Resources</p>
          {[
            { name: "Home Affordability Calculator", href: "/home-affordability-calculator" },
            { name: "Mortgage Calculator", href: "/mortage-calculator" },
            { name: "Free Mortgage Calculator", href: "/free-mortgage-calculator" },
            { name: "Mortgage Calculator with Taxes", href: "/mortgage-calculator-with-taxes" },
            { name: "Mortgage Calculator with PMI", href: "/mortgage-calculator-with-pmi" },
            { name: "Rent vs Buy Calculator", href: "/rent-vs-buy-calculator" },
            { name: "HELOC Payment Calculator", href: "/heloc-payment-calculator" },
            { name: "HELOC vs Cash-out Refinance Calculator", href: "/heloc-vs-cash-out-refinance-calculator" },
            { name: "Buy a Home", href: "/buy-a-home" },
            { name: "Sell a Home", href: "/sell-a-home" },
            { name: "Get Home Inspection", href: "/get-home-inspection" },
          ].map((resource) => (
            <Link key={resource.name} href={resource.href} className="hover:underline">
              {resource.name}
            </Link>
          ))}
        </div>

        <div className="flex flex-col text-base gap-y-4 flex-1 min-w-[200px] mb-8 lg:mb-0">
          <Link href="/" className="font-bold text-xl">
            Company
          </Link>
          {[
            { name: "About Us", href: "/about" },
            "Careers",
            "Media",
            "Partner With Us",
            "Learning Center",
            "FAQs",
            "Investor Relations",
          ].map((item) =>
            typeof item === "string" ? (
              <a key={item} href="#" className="hover:underline">
                {item}
              </a>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="hover:underline"
              >
                {item.name}
              </Link>
            )
          )}
        </div>

        <div className="flex flex-col text-base gap-y-4 flex-1 min-w-[200px]">
          <Link href="/contact-us" className="font-bold text-xl">
            Contact Us
          </Link>
          <a href="mailto:hello@better.com" className="hover:underline">
            hello@better.com
          </a>
          <a href="tel:+14155238837" className="hover:underline">
            415-523-8837
          </a>
          <Link href="/faq" className="font-bold text-xl">
            FAQ
          </Link>
          {[
            "Glossary",
            "Legal",
            "NMLS Consumer Access",
            "Privacy Policy",
            "Terms of Use",
            "Disclosures & Licensing",
            "Affiliated Business",
            "Browser Disclaimer",
          ].map((contact) => (
            <a key={contact} href="#" className="hover:underline">
              {contact}
            </a>
          ))}
        </div>


      </div>

      <div className="flex py-8 space-x-3">
        <img src="/fb.svg" alt="Facebook" className="w-8 h-8" />
        <img src="/ig.svg" alt="Instagram" className="w-8 h-8" />
        <img src="/ln.svg" alt="LinkedIn" className="w-8 h-8" />
      </div>

      <div className="text-xs">
        <div className="flex flex-col gap-y-4">
          <p>
            Better Mortgage’s One Day Mortgage™ promotion offers qualified
            customers who provide certain required financial
            information/documentation to Better Mortgage within 4 hours of
            locking a rate on a mortgage loan the opportunity to receive an
            underwriting determination from Better Mortgage within 24 hours of
            their rate lock. The underwriting determination is subject to
            customary terms, including fraud and anti-money laundering checks,
            that take place pre-closing and which may trigger additional
            required documentation from the customer. Better Mortgage does not
            guarantee that initial underwriting approval will result in a final
            underwriting approval. See One Day Mortgage™ Terms and Conditions.
          </p>
          <p>
            Better Mortgage’s One Day HELOC™ promotion offers qualified
            customers who provide certain required financial
            information/documentation to Better Mortgage within 4 hours of
            locking a rate on a HELOC loan the opportunity to receive an
            underwriting determination from Better Mortgage within 24 hours of
            their rate lock. The underwriting determination is subject to
            customary terms, including fraud and anti-money laundering checks,
            that take place pre-closing and which may trigger additional
            required documentation from the customer. Better Mortgage does not
            guarantee that initial underwriting approval will result in final
            underwriting approval. See One Day Heloc™ Terms and Conditions.
          </p>
          <p>
            Assumes borrowers are eligible for the Automated Valuation Model
            (AVM) to calculate their home value, their loan amount is less than
            $400,000, all required documents are uploaded to their Better
            Mortgage online account within 24 hours of application, closing is
            scheduled for the earliest available date and time, and a notary is
            readily available. Funding timelines may vary and may be longer if
            an appraisal is required to calculate a borrower’s home value.
          </p>
        </div>

        <hr className="border-t border-gray-300 my-4" />

        <div className="flex flex-col gap-y-4 text-xs">
          <p>
            © 2024 Better Home & Finance Holding Company and/or its affiliates.
            Better is a family of companies. Better Mortgage Corporation
            provides home loans; Better Real Estate, LLC and Better Real Estate
            California Inc License # 02164055 provides real estate services;
            Better Cover, LLC sells insurance products; and Better Settlement
            Services provides title insurance services; and Better Inspect, LLC
            provides home inspection services. All rights reserved.
          </p>
          <p>
            Home lending products offered by Better Mortgage Corporation. Better
            Mortgage Corporation is a direct lender. NMLS #330511. 3 World Trade
            Center, 175 Greenwich Street, 57th Floor, New York, NY 10007. Loans
            made or arranged pursuant to a California Finance Lenders Law
            License. Not available in all states. Equal Housing Lender. NMLS
            Consumer Access
          </p>
          <p>
            Better Real Estate, LLC dba BRE, Better Home Services, BRE Services,
            LLC and Better Real Estate, and operating in the State of California
            through its wholly owned subsidiary Better Real Estate California
            Inc., is a licensed real estate brokerage and maintains its
            corporate headquarters at 325-41 Chestnut Street, Suite 826,
            Philadelphia, PA 19106. Here is a full listing of Better Real
            Estate, LLC’s license numbers. Better Real Estate, LLC provides
            access to real estate brokerage services via its nationwide network
            of partner brokerages and real estate agents (“Better Real Estate
            Partner Agents”). Equal Housing Opportunity. All rights reserved.
          </p>
          <p>New York State Fair Housing Notice</p>
          <p>New York Standard Operating Procedures</p>
          <p>
            Texas Real Estate Commission: Information About Brokerage Services |
            Consumer Protection Notice
          </p>
          <p>
            Better Settlement Services, LLC. 325-41 Chestnut Street, Suite 803,
            Philadelphia, PA 19106.
          </p>
          <p>
            Homeowners insurance policies are offered through Better Cover, LLC,
            a Pennsylvania Resident Producer Agency. License #881593. 325-41
            Chestnut Street, Suite 807, Philadelphia, PA 19106.
          </p>
          <p>
            Better Inspect, LLC maintains its corporate headquarters at 325-41
            Chestnut Street, Suite 846, Philadelphia, PA 19106.
          </p>
          <p>
            Better Mortgage Corporation, Better Real Estate, LLC, Better
            Settlement Services, LLC, Better Cover, LLC, Better Connect, and
            Better Inspect, LLC are separate operating subsidiaries of Better
            Home & Finance Holding Company. Each company is a separate legal
            entity operated and managed through its own management and
            governance structure as required by its state of incorporation, and
            applicable and legal and regulatory requirements. Products not
            available in all states.
          </p>
          <p>
            Any unauthorized use of any proprietary or copyrighted materials is
            prohibited. The materials contained herein are for informational
            purposes only and should not be construed as legal advice or a legal
            opinion on any specific facts or circumstances. This material may
            not be published, broadcast, rewritten, or redistributed.
          </p>
        </div>
      </div>
    </div>
  );
}
