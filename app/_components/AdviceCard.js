"use client";

import { useState, useTransition } from "react";
import { getAdvice } from "../_lib/data-service";
import SpinnerMini from "./SpinnerMini";
export default function AdviceCard() {
  const [advise, setAdvise] = useState({
    id: 117,
    advice:
      "It is easier to sit up and take notice, what's difficult is getting up and taking action.",
  });
  const [isPending, startTransition] = useTransition();
  // const advice = await getAdvice();

  function handleclick() {
    startTransition(async () => {
      const advice = await getAdvice();

      setAdvise({ id: advice.slip.id, advice: advice.slip.advice });
    });
  }
  return (
    <div
      className="relative w-1/4  mx-auto bg-accent-70 py-2 px-4 rounded-lg mobile:w-3/4 
     "
    >
      <h1 className="text-primary-960 text-xs my-4">{`advice # ${advise.id}`}</h1>
      <p>
        {isPending ? (
          <span className=" absolute -translate-x-1/2 -translate-y-1/2">
            <SpinnerMini />{" "}
          </span>
        ) : (
          <q>{advise.advice}.</q>
        )}
      </p>
      <img
        src="/pattern-divider-desktop.svg"
        alt="pattern divider photo"
        className="my-10"
      />

      <button
        className="w-[40px] h-[40px] rounded-full bg-primary-960 
       absolute -translate-x-1/2 -translate-y-1/2 active:shadow-2xl active:shadow-primary-50"
        onClick={handleclick}
      >
        <img
          src="/icon-dice.svg"
          alt="icon dice photo"
          className="mx-auto w-[20px] h-[20px]"
        />
      </button>
    </div>
  );
}
