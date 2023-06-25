export default function AdviceCard(props) {
  return (
    <div className="bg-neutral-medium-gray flex flex-col justify-center items-center max-w-[500px] w-[80%] pt-8 px-8 rounded-xl">
      <h2 className="uppercase text-primary-neon font-extrabold tracking-[0.2em] text-[12px] pb-5">
        Advice #{props.slip === undefined ? "?" : props.slip.id}
      </h2>
      {props.slip === undefined ? (
        <h1 className="pb-8 text-red-500 text-[18px] font-extrabold">
          Bad Gateway: Please try again
        </h1>
      ) : (
        <h1 className="text-primary-white font-extrabold text-[24px] text-center pb-8">
          "{props.slip.advice}"
        </h1>
      )}
      <img
        className="hidden sm:block"
        src="/pattern-divider-desktop.svg"
        alt="divider"
      />
      <img
        className="sm:hidden"
        src="/pattern-divider-mobile.svg"
        alt="divider"
      />
      <div
        className="bg-primary-neon p-4 rounded-full w-max hover:shadow-btn hover:shadow-primary-neon transition-all translate-y-[50%] cursor-pointer"
        onClick={() => props.fetchData(props.randomizer())}
      >
        <img src="/icon-dice.svg" alt="dice-btn" />
      </div>
    </div>
  );
}
