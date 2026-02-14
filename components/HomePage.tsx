// props types
type HomePageProps = {
    username: string;
    setUsername: (name: string) => void;
}

export default function HomePage({ username, setUsername }: HomePageProps) {
    const handleSubmit = (event: React.SubmitEvent) => {
        // prevent default submission
        event.preventDefault();
        setUsername(event.target[0].value);
    }

    return (
        <div id="HomePage">
            <h1>Welcome to my website!</h1>
            <h2>Please enter your name:</h2>
            <form onSubmit={handleSubmit}>
                <input id="username" type="text" />
                <button type="submit">Submit</button>
            </form>

            {/* greet the user only if their name is not guest (default value) */}
            {username != 'guest' && <h2>Hello, {username}!</h2>}
        </div>
    );
}