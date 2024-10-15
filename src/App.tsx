import "./App.css";

type TProps = {
  children: React.ReactNode;
  isOpposite?: boolean;
};

const StripesContainer = ({ children, isOpposite }: TProps) => (
  <div
    className={`flex justify-center items-center gap-2 flex-col absolute rotate-45 ${
      isOpposite ?? "-rotate-45"
    } `}
  >
    {children}
  </div>
);

const stripe = <div className="bg-red-600 w-48 h-1.5"></div>;

function App() {
  return (
    <div className="aspect-[3/2] bg-red-600 h-96 flex justify-center items-center">
      <div className="bg-yellow-300 rounded-full h-56 aspect-square flex justify-center items-center">
        <div className="bg-red-600 rounded-full h-52 aspect-square flex justify-center items-center">
          <div className="bg-yellow-300 rounded-full h-48 aspect-square flex justify-center items-center">
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
