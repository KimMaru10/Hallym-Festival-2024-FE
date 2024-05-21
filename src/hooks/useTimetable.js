import { useEffect, useState } from "react";
export const useTimetable = (value, initialValue, timetable) => {
  const [pageIndex, setPageIndex] = useState(initialValue); // 페이지 인덱스 설정

  useEffect(() => {
    const day = new Date().getDate();

    if (day === 20) {
      setPageIndex(0);
    } else if (day === 21) {
      setPageIndex(1);
    } else if (day === 22) {
      setPageIndex(2);
    } else if (day === 23) {
      setPageIndex(3);
    } else {
      setPageIndex(0);
    }
  }, []);
  useEffect(() => {
    if (value === true) {
      setPageIndex(3);
    }
  }, [value]);

  const dateArr = timetable.days.map((day) => day.date);
  const imgArr = timetable.days.map((day) => day.photo_url);
  const articleArr = timetable.days.map((day) => day.schedule);
  return { pageIndex, setPageIndex, dateArr, imgArr, articleArr };
};
