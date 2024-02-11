const calculateEndOfDayTime = () => {
  const now = new Date();
  const endOfDay = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    23, 59, 59, 999
  );

  return endOfDay - now;
};

export default calculateEndOfDayTime;