import { useEffect, useState, createContext, useContext } from "react";
export const DeadlineContext = createContext();

// const total = Date.parse(deadlineTime) - Date.parse(new Date());

export const DeadlineContextPage = ({ children }) => {

  

  const now = new Date();

const [currentDate, setCurrentDate] = useState(new Date());

const getDaysBetweenDates = (startDate, endDate) => {
  return Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
};

const daysDifference = getDaysBetweenDates(currentDate, new Date("2023-09-27")); //"year-month-day"
// const daysDifference = getDaysBetweenDates(currentDate, new Date("2023-08-11")) - 1;

const currentYear = now.getUTCFullYear();
const currentMonth = now.getUTCMonth();
const currentDay = now.getUTCDate() + daysDifference;
const currentHour = 12; //Nigerian time - 1
const currentMinute = 30;

const deadlineTime = new Date(
  Date.UTC(currentYear, currentMonth, currentDay, currentHour, currentMinute)
);



  const calculateTimeRemaining = () => {
    const total = deadlineTime.getTime() - Date.now();
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor(total / (1000 * 60 * 60));
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      total,
      days,
      hours,
      minutes,
      seconds,
    };
  };

  // Rest of your code remains the same...

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

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
    <>
      <DeadlineContext.Provider
        value={{
          timeRemaining,
          setTimeRemaining,
          deadlineTime,
        }}
      >
        {children}
      </DeadlineContext.Provider>
    </>
  );
};

export const DeadlinePass = () => {
  return useContext(DeadlineContext);
};
