import React from "react";
import BenefitItem from "./BenefitItem";
import { CheckIcon } from "@heroicons/react/solid";
import { Element } from "react-scroll";

function Benefits() {
  return (
    <section className="container mt-24 space-y-24">
      <Element name="features-section">
        <h1 className=" text-center font-bold text-4xl">Features & Benefits</h1>
      </Element>
      <BenefitItem
        image="./images/Dashboard.jpg"
        heading2="Dashboard"
        description="Discover a new way to manage your finances with our cutting-edge dashboard. Take control of your money, set financial goals, and track your progress all in one place. Our intuitive design makes it easy for you to stay on top of your finances."
        Content={() => (
          <div>
            <h5 className="mt-6 mb-2 font-semibold">Real-Time Updates</h5>
            <p>
              See your transactions and account balances in real-time. No more
              waiting for monthly statements.
            </p>
            <h5 className="mt-6 mb-2 font-semibold">Transaction History</h5>
            <p>
              Access your complete transaction history with just a few clicks.
              Stay organized and never miss a payment..
            </p>
          </div>
        )}
      />

      <BenefitItem
        image="./images/Transaction.jpg"
        heading2="Transaction"
        description="Discover a new way to manage your finances with our cutting-edge dashboard. Take control of your money, set financial goals, and track your progress all in one place. Our intuitive design makes it easy for you to stay on top of your finances."
        Content={() => (
          <div>
            <h5 className="mt-6 mb-2 font-semibold">Real-Time Updates</h5>
            <p>
              See your transactions and account balances in real-time. No more
              waiting for monthly statements.
            </p>
            <h5 className="mt-6 mb-2 font-semibold">Transaction History</h5>
            <p>
              Access your complete transaction history with just a few clicks.
              Stay organized and never miss a payment..
            </p>
          </div>
        )}
      />

      <BenefitItem
        image="./images/account.jpg"
        heading2="Account"
        description="The hub for all your financial information. We've designed this page to help you effortlessly manage your accounts, ensuring you're always in control of your finances. "
        Content={() => (
          <div className="flex flex-col space-y-6">
            <CheckedItem
              bgColor="#FF9900"
              text="Download account statements for record-keeping or tax purposes. Keep your financial history organized and accessible."
            />
            <CheckedItem
              bgColor="#F03E3D"
              text="our data's security is our top priority. Rest assured that your financial information is protected with robust encryption and authentication."
            />
            <CheckedItem
              bgColor="#4D8DFF"
              text="We track the markets daily and know where the savings are."
            />
          </div>
        )}
      />

      <BenefitItem
        image="./images/Reports.jpg"
        heading2="Reports"
        description="We understand that managing your finances requires more than just tracking expenses. It's about gaining a deeper understanding of your financial habits and goals."
        Content={() => (
          <div>
            <h5 className="mt-6 mb-2 font-semibold">Customizable Reports</h5>
            <p>
              Tailor reports to your specific needs. Choose the time period,
              categories, and accounts you want to analyze.
            </p>
            <h5 className="mt-6 mb-2 font-semibold">Expense Categories</h5>
            <p>
              Easily digest your financial data with interactive charts and
              graphs. Visualize your spending patterns and income sources.
            </p>
            <h5 className="mt-6 mb-2 font-semibold">Visual Analytics</h5>
            <p>
              Categorize your expenses for a detailed breakdown. Identify where
              your money is going and find opportunities to save.
            </p>
          </div>
        )}
      />

      <BenefitItem
        image="./images/Budget.jpg"
        heading2="Budgets"
        description="Budgeting is the cornerstone of financial success, and we're here to make it easy for you."
        Content={() => (
          <div>
            <h5 className="mt-6 mb-2 font-semibold">Create Custom Budgets</h5>
            <p>
              Set up budgets for various expense categories and financial goals.
              Plan for everything from groceries to vacations.
            </p>
            <h5 className="mt-6 mb-2 font-semibold">Goal Setting</h5>
            <p>
              Define savings goals and track your progress. Whether it's a new
              car, a dream vacation, or a down payment on a house, we'll help
              you get there.
            </p>
            <h5 className="mt-6 mb-2 font-semibold">Real-time Tracking</h5>
            <p>
              Monitor your spending in real-time. Stay on top of your budget and
              receive notifications when you're approaching your limits.
            </p>
          </div>
        )}
      />
    </section>
  );
}

export default Benefits;

function CheckedItem({ bgColor, text }) {
  return (
    <div>
      <div className="flex items-center space-x-6">
        <div style={{ background: `${bgColor}` }} className="rounded-xl p-1.5">
          <CheckIcon className="h-8 text-white" />
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
}
