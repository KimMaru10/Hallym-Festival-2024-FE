import { useEffect, useState } from "react";
export const useTimetable = (value, initialValue, timetable) => {
  const [pageIndex, setPageIndex] = useState(initialValue); // 페이지 인덱스 설정
  useEffect(() => {
    if (value === true) {
      setPageIndex(4);
    }
  }, [value]);

  const dateArr = timetable.days.map((day) => day.date);
  const imgArr = timetable.days.map((day) => day.photo_url);
  const articleArr = timetable.days.map((day) => day.schedule);
  return { pageIndex, setPageIndex, dateArr, imgArr, articleArr };
};
