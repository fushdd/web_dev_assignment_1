import { useState } from "react"

// props types
type MotivationProps = {
    username: string;
}

export default function Motivation({ username }: MotivationProps) {
    // state to check if the user hovers over the div
    const [hovered, setHovered] = useState(false);

    // on hover in
    const handleMouseOver = () => {
        setHovered(true);
    }

    // on hover out
    const handleMouseOut = () => {
        setHovered(false);
    }

    return (
        <div>
            <h2>Hover to get motivated!</h2>
            {hovered ?
                // if hovered, display the phrase
                <div
                    id="motivation"
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    style={{
                        display: "inline-block",
                        color: "black"
                    }}>
                    {/* use global state */}
                    <h3>You've got this, {username}!</h3>
                </div>
                :
                // if not hovered, cover the phrase
                <div
                    id="motivation"
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    style={{
                        display: "inline-block",
                        backgroundColor: 'grey',
                        color: "grey"
                    }}>
                    {/* use global state */}
                    <h3>You've got this, {username}!</h3>
                </div>}

        </div>
    )
}