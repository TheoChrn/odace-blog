import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div
      id="error-page"
      className="min-h-[70svh] text-white flex flex-col items-center justify-center gap-y-8 px-5"
    >
      <h1 className="text-center text-xl">Oops!</h1>
      <p className="text-center text-xl">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-center">
        <i className="text-5xl">
          {error instanceof Error ? error.message : "404 Not Found"}
        </i>
      </p>
    </div>
  );
}
