import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>Error</h1>
            <p>Looks like something went wrong:</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <p>Consider going back to the homepage.</p>
            <button>Return to homepage</button>
        </div>
    )
}