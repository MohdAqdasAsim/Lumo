const TrafficLight = ({ currentLight }) => {
  const getLightClass = (color) =>
    `w-20 h-20 rounded-full transition-all duration-300 ${
      currentLight === color ? color + "-500 shadow-lg" : "bg-gray-300"
    }`;

  return (
    <div className="flex flex-col items-center space-y-4 bg-gray-800 p-6 rounded-xl shadow-md">
      <div className={getLightClass("red")}></div>
      <div className={getLightClass("yellow")}></div>
      <div className={getLightClass("green")}></div>
    </div>
  );
};

export default TrafficLight;
