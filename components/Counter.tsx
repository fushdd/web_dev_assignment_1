// props types 
type CounterProps = {
    currentCount: number;
    setCurrentCount: (count: number) => void;

    highestCount: number;
    setHighestCount: (count: number) => void;
};
// getting passed props (so that the highest and current scores can be saved between "pages")
export default function Counter({ currentCount, setCurrentCount, highestCount, setHighestCount }: CounterProps) {

    return (
        <div id="counter">
            <h1>Highest Score: {highestCount}</h1>
            <h1>Count: {currentCount}</h1>
            {/* increment on click */}
            <button onClick={() => {
                currentCount + 1 > highestCount && setHighestCount(currentCount + 1)
                setCurrentCount(currentCount + 1)
            }}>+ 1</button>
            {/* decrement on click */}
            <button onClick={() => { setCurrentCount(currentCount - 1) }}>- 1</button>
        </div>
    );
}
