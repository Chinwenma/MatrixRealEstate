'use client'

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type AccordionItemProps = {
  question: string;
  answer: string;
};

export const AccordionItem = ({ question, answer }: AccordionItemProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full py-4 text-left"
      >
        <span className="font-medium text-gray-800">{question}</span>
        <ChevronDown className={`w-5 h-5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="pb-4 text-gray-600">{answer}</div>
      )}
    </div>
  );
};
