import { DeadlinePass } from "../../../contexts/deadlineContext";

import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function CountdownTimer({ deadline }) {
  const { timeRemaining, setTimeRemaining, deadlineTime } = DeadlinePass();
  const calculateTimeRemaining = () => {
    const now = new Date().getTime();
    const deadline = new Date(deadlineTime).getTime();
    const total = deadline - now;
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      total,
      days,
      hours,
      minutes,
      seconds,
    };
  };

  useEffect(() => {
    const timerId = setInterval(() => {
      const updatedTimeRemaining = calculateTimeRemaining();
      setTimeRemaining(updatedTimeRemaining);

      if (updatedTimeRemaining.total <= 0) {
        clearInterval(timerId);
      }
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div>
      <div>
        <div className="deadline flex flex-row text-center items-center space-x-4">
          <div className=" flex flex-row items-baseline">
            <div className=" md:text-[3em] text-[3em]">
              {timeRemaining.hours < 10 ? (
                <div>0{timeRemaining.hours}</div>
              ) : (
                <div>{timeRemaining.hours}</div>
              )}
            </div>
            <div className=" text-[0.8em] ">H</div>
          </div>
          <div className=" flex flex-row items-baseline">
            <div className=" md:text-[3em] text-[3em]">
              {timeRemaining.minutes < 10 ? (
                <div>0{timeRemaining.minutes}</div>
              ) : (
                <div>{timeRemaining.minutes}</div>
              )}
            </div>
            <div className=" text-[0.8em] ">M</div>
          </div>
          <div className=" flex flex-row items-baseline">
            <div className=" md:text-[3em] text-[3em]">
              {timeRemaining.seconds < 10 ? (
                <div>0{timeRemaining.seconds}</div>
              ) : (
                <div>{timeRemaining.seconds}</div>
              )}
            </div>
            <div className=" text-[0.8em] ">S</div>
          </div>
        </div>
      </div>
      {/* )} */}
    </div>
  );
}
function formatDate(dateString) {
  const options = {
    weekday: "short",
    day: "numeric",
    month: "short",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  };

  const date = new Date(dateString);
  return date.toLocaleString("en-US", options);
}

function Deadline() {
  const { timeRemaining, setTimeRemaining, deadlineTime } = DeadlinePass();
  const deadline = deadlineTime;
  // year-month-dayThour:Minute:second
  const formattedDate = formatDate(deadline);

  const location = useLocation();

  const isPageInRoute = (route) => {
    return location.pathname === route;
  };

  return (
    <>
      <div className="deadline flex md:flex-row flex-col justify-between items-center">
        {/* <div className="py-1 ">
             {formattedDate}
          </div> */}
        {timeRemaining.total >= 0 ? (
          <CountdownTimer deadline={deadline} />
        ) : (
          <div className="flex flex-row text-center items-center space-x-6">
            <div className=" flex flex-row items-baseline">
              <div className=" md:text-[3em] text-[3em]">00</div>
              <div className=" text-[0.8em] ">H</div>
            </div>
            <div className=" flex flex-row items-baseline">
              <div className=" md:text-[3em] text-[3em]">00</div>
              <div className=" text-[0.8em] ">M</div>
            </div>
            <div className=" flex flex-row items-baseline">
              <div className=" md:text-[3em] text-[3em]">00</div>
              <div className=" text-[0.8em] ">S</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Deadline;
