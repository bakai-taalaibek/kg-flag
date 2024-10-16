import "./App.css";

const customYellow = "bg-yellow-300";
const customRed = "bg-red-600";

type TProps = {
  children: React.ReactNode;
  isOpposite?: boolean;
};

const StripesContainer = ({ children, isOpposite }: TProps) => (
  <div
    className={`flex justify-center items-center gap-2 flex-col absolute ${
      isOpposite ? "-rotate-45" : "rotate-45"
    } `}
  >
    {children}
  </div>
);

const stripe = <div className={`${customRed} w-48 h-1.5`}></div>;

const RayOnStick = () => (
  <div className={`flex flex-col absolute items-center`}>
    <div className={`h-[110px] w-0 bg-green-500 relative`}>
      <div
        className={`absolute transform translate-y-full -translate-x-1/2 bottom-0 left-1/2 w-0 h-0 
          border-l-[9px] border-r-[9px] border-t-[32px] 
          border-l-transparent border-r-transparent border-t-yellow-300`}
      ></div>
    </div>
  </div>
);

function App() {
  return (
    <div
      className={`${customRed} aspect-[3/2] h-96 flex justify-center items-center`}
    >
      <div className="absolute transform translate-x-1/2">
        {Array.from(Array(40).keys()).map((_, index) => (
          <div
            style={{
              transform: `rotate(${index * 9}deg)`,
            }}
          >
            <RayOnStick />
          </div>
        ))}
      </div>
      <div
        className={`${customYellow} rounded-full h-56 aspect-square flex justify-center items-center`}
      >
        <div
          className={`${customRed} rounded-full h-52 aspect-square flex justify-center items-center`}
        >
          <div
            className={`${customYellow} rounded-full h-48 aspect-square flex justify-center items-center`}
          >
            <StripesContainer>
              {Array.from(Array(4).keys()).map(() => stripe)}
            </StripesContainer>
            <StripesContainer isOpposite>
              {Array.from(Array(4).keys()).map(() => stripe)}
            </StripesContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
