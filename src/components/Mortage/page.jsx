import React, { useState, useEffect, useCallback } from "react";
import "../../app/globals.css";

export default function Mortgage() {
  const [homePrice, setHomePrice] = useState("300000"); 
  const [downPayment, setDownPayment] = useState("60000"); 
  const [interestRate, setInterestRate] = useState("3.5"); 
  const [loanTerm, setLoanTerm] = useState("30"); 
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const calculateMonthlyPayment = useCallback(() => {
    const principal = parseFloat(homePrice) - parseFloat(downPayment);
    const annualInterestRate = parseFloat(interestRate) / 100;
    const monthlyInterestRate = annualInterestRate / 12;
    const numberOfPayments = parseInt(loanTerm) * 12;

    if (
      isNaN(principal) ||
      isNaN(monthlyInterestRate) ||
      isNaN(numberOfPayments) ||
      numberOfPayments <= 0
    ) {
      setMonthlyPayment("Invalid input");
      return;
    }

    const payment =
      (principal * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    setMonthlyPayment(payment.toFixed(2));
  }, [homePrice, downPayment, interestRate, loanTerm]);

  useEffect(() => {
    calculateMonthlyPayment();
  }, [calculateMonthlyPayment]); 

  return (
    <div className="py-20 bg-customGreen2">
      <div className="flex flex-col w-11/12 max-w-5xl mx-auto gap-y-8 p-8 md:p-20">
        <p className="text-3xl md:text-4xl font-semibold">Mortgage Calculator</p>
        <p className="text-base text-customGreen">
          Use our mortgage calculator to get accurate estimates for your monthly mortgage payments. 
          Learn more about private mortgage insurance (PMI) and other details.
        </p>
      </div>
      <div className="flex flex-col gap-y-16">
        <div className="flex flex-col md:flex-row md:gap-x-80 text-2xl md:text-3xl px-8 md:px-24 font-semibold">
          <div className="flex flex-col mb-8">
            <p>Home Price</p>
            <div className="relative mt-2">
              <input
                type="text"
                value={homePrice}
                onChange={(e) =>
                  setHomePrice(e.target.value.replace(/[^0-9.]/g, ""))
                }
                className="py-6 pl-10 text-2xl pr-4 border border-black rounded-lg"
                placeholder="Home Price"
              />
              <span className="text-2xl absolute left-3 top-6">$</span>
            </div>
          </div>

          <div className="flex flex-col mb-8">
            <p>Monthly Payment</p>
            {monthlyPayment !== null && (
              <p className="text-4xl font-semibold">${monthlyPayment}</p>
            )}
          </div>
        </div>

        <div className="px-8 md:px-20 flex flex-col gap-y-14">
          <div className="flex flex-col items-center w-full">
            <input
              type="range"
              min="100000"
              max="1000000"
              step="10000"
              value={homePrice}
              onChange={(e) => setHomePrice(e.target.value)}
              className="custom-slider w-full"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 md:px-20">
            <div className="relative flex items-center w-full">
              <input
                type="number"
                value={downPayment}
                onChange={(e) => setDownPayment(e.target.value)}
                className="py-5 px-8 rounded-lg border border-gray-300 bg-white placeholder-transparent text-center flex-1"
                placeholder=" "
              />
              <span className="absolute right-3 text-sm text-gray-500">%</span>
              <label className="absolute top-3 left-3 text-xs text-gray-500 pointer-events-none">
                Down Payment
              </label>
            </div>

            <div className="relative flex items-center w-full">
              <input
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                className="py-5 px-8 rounded-lg border border-gray-300 bg-white placeholder-transparent text-center flex-1"
                placeholder=" "
              />
              <span className="absolute right-3 text-sm text-gray-500">%</span>
              <label className="absolute top-3 left-3 text-xs text-gray-500 pointer-events-none">
                Interest Rate
              </label>
            </div>

            <div className="relative flex items-center w-full">
              <input
                type="number"
                value={loanTerm}
                onChange={(e) => setLoanTerm(e.target.value)}
                className="py-5 px-8 rounded-lg border border-gray-300 bg-white placeholder-transparent text-center flex-1"
                placeholder=" "
              />
              <span className="absolute right-3 text-sm text-gray-500">Years</span>
              <label className="absolute top-3 left-3 text-xs text-gray-500 pointer-events-none">
                Length of Loan
              </label>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button
            onClick={calculateMonthlyPayment}
            className="p-2 px-8 text-lg bg-customGreen1 text-white rounded-lg"
          >
            Get Pre-approved
          </button>
        </div>
      </div>
    </div>
  );
}
