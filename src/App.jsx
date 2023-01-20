import Form from "./components/Form";

function App() {
  return (
    <section className="m-4 text-center xl:grid xl:grid-cols-2 xl:max-w-7xl xl:place-items-center">
      <div className="xl:row-span-2 xl:max-w-lg xl:pt-20">
        <h1 className="font-bold text-white text-2xl pb-4 xl:text-5xl xl:text-left">
          Learn to code by watching others
        </h1>

        <p className="text-white pb-10 text-sm xl:text-left xl:pr-6">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>

      <button
        className="bg-customBlue rounded-lg p-4 px-10 text-white drop-shadow-[0_8px_0_rgba(0,0,0,0.15)]
      xl:col-start-2 w-full"
      >
        <span className="inline text-white font-bold">Try it free 7 days</span>{" "}
        then $20/mo. thereafter
      </button>

      <div
        className="xl:col-start-2 xl:grid xl:w-[640px] bg-white rounded-lg p-2 mt-6 text-sm drop-shadow-[0_8px_0_rgba(0,0,0,0.15)]
      xl:p-8 
      "
      >
        <Form />
      </div>
    </section>
  );
}

export default App;
