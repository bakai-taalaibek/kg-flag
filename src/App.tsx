import "./App.css";

const customYellow = "bg-yellow-300";
const customRed = "bg-red-600";

type TProps = {
  children: React.ReactNode;
  isOpposite?: boolean;
};

const StripesContainer = ({ children, isOpposite }: TProps) => (
  <div
    className={`flex justify-center items-center gap-[10px] flex-col absolute ${
      isOpposite ? "-rotate-45" : "rotate-45"
    } `}
  >
    {children}
  </div>
);

const stripe = <div className={`${customRed} w-40 h-[6px]`}></div>;

const ray = (
  <div
    className={`absolute transform translate-y-full -translate-x-1/2 bottom-0 left-1/2 w-0 h-0 
  border-l-[8px] border-r-[8px] border-t-[42px] 
  border-l-transparent border-r-transparent border-t-yellow-300`}
  ></div>
);

const rayHatPercentage = 0.15;
const rayWidth = 16;
const rayHeight = 40;

const rayCurvy = (
  <div
    className={`${customYellow} absolute transform translate-y-full -translate-x-1/2 bottom-0 left-1/2 w-[16px] h-[42px]`}
    style={{
      clipPath: `path('M 0 0 Q 0 12, ${
        rayWidth * ((0.5 - rayHatPercentage / 2) / 2)
      } ${(rayHeight * (1 - rayHatPercentage)) / 2} T ${
        rayWidth * (0.5 - rayHatPercentage / 2)
      } ${rayHeight * (1 - rayHatPercentage)} T ${
        rayWidth * 0.5
      } ${rayHeight} T ${rayWidth * (0.5 + rayHatPercentage / 2)} ${
        rayHeight * (1 - rayHatPercentage)
      } q 4 -10, ${rayWidth * ((0.5 - rayHatPercentage / 2) / 2)} -${
        rayHeight * ((1 - rayHatPercentage) / 2)
      } T ${rayWidth} 0 Z')`,
    }}
  ></div>
);

const Spear = () => (
  <div className={`flex flex-col absolute items-center`}>
    <div className={`h-[99px] w-0 bg-green-500 relative`}>{rayCurvy}</div>
  </div>
);

function App() {
  return (
    <div
      className={`${customRed} aspect-[3/2] h-[430px] flex justify-center items-center`}
    >
      <div className="absolute transform translate-x-1/2">
        {Array.from(Array(40).keys()).map((_, index) => (
          <div
            style={{
              transform: `rotate(${index * 9}deg)`,
            }}
          >
            <Spear />
          </div>
        ))}
      </div>
      <div
        className={`${customYellow} rounded-full h-[200px] aspect-square flex justify-center items-center`}
      >
        <div
          className={`${customRed} rounded-full h-44 aspect-square flex justify-center items-center`}
        >
          <div
            className={`${customYellow} rounded-full h-40 aspect-square flex justify-center items-center`}
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
