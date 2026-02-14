import { useState } from "react";
import Counter from "@/components/Counter";
import HomePage from "@/components/HomePage";
import Motivation from "@/components/Motivation";
import Calculator from "@/components/Calculator";

export default function Home() {
    // states
    const [currentPage, setCurrentPage] = useState(0);

    const [currentCount, setCurrentCount] = useState(0);
    const [highestCount, setHighestCount] = useState(0);

    const [username, setUsername] = useState("guest");
    // variable for page content
    let content;
    switch (currentPage) {
        // set the content based on current page
        case 0:
            content = <HomePage
                username={username}
                setUsername={setUsername} />
            break;
        case 1:
            content = <Counter
                currentCount={currentCount}
                setCurrentCount={setCurrentCount}
                highestCount={highestCount}
                setHighestCount={setHighestCount} />
            break;
        case 2:
            content = <Calculator />
            break;
        case 3:
            content = <Motivation
                username={username} />
            break;
        default:
            break;
    }
    return (
        <div>
            {/* nav bar with buttons that change current page state */}
            <div id="navbar">
                <h2 onClick={() => { setCurrentPage(0) }}>Home</h2>
                <h2 onClick={() => { setCurrentPage(1) }}>Counter</h2>
                <h2 onClick={() => { setCurrentPage(2) }}>Calculator</h2>
                <h2 onClick={() => { setCurrentPage(3) }}>Motivation</h2>
            </div>
            
            {/* page content */}
            {content}
        </div>
    );
}
