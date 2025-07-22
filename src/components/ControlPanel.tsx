const ControlPanel = ({ onChangeLight, mode, setMode }) => {
  return (
    <div className="mt-8 flex flex-col items-center space-y-4">
      <div className="flex gap-4">
        <button
          onClick={() => onChangeLight("red")}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Red
        </button>
        <button
          onClick={() => onChangeLight("yellow")}
          className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500"
        >
          Yellow
        </button>
        <button
          onClick={() => onChangeLight("green")}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Green
        </button>
      </div>

      <div className="flex gap-2 mt-6">
        {["manual", "auto", "chaos"].map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className={`px-4 py-1.5 rounded ${
              mode === m
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {m.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ControlPanel;
