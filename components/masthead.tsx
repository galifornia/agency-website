type Props = {};

const MastHead: React.FC = ({}: Props) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white">
      <div className="p12 font-bold text-white z-10 drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex-1 flex flex-col items-center justify-center">
        <h1 className="mb-6 text-4xl xl:text-5xl">Beatitudo</h1>
        <h2 className="mb-2 text-2xl xl:text-3xl tracking-tight">
          <span>App Development,</span> <span>done right.</span>
        </h2>
      </div>
    </div>
  );
};

export default MastHead;
