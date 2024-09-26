"use client";
import React from "react";
import { Container } from "@/components/Home/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (  
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }):any=> (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "Do you repair all types of devices?",
    answer: "Yes, we repair smartphones, tablets, laptops, and other electronic devices.",
  },
  {
    question: "How long does a typical repair take?",
    answer: "Most repairs are completed the same day, depending on the complexity of the issue.",
  },
  {
    question: "What is your warranty policy?",
    answer: "We offer a warranty on all repairs. If you experience any issues after the repair, contact us within 90 days for a free fix.",
  },
  {
    question: "Do you offer a pickup and delivery service?",
    answer: "Yes, we provide convenient pickup and delivery options for repairs. Contact us to schedule a pickup.",
  },
];
