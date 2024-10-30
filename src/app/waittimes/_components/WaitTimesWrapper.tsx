interface WaitTimesWrapperProps {
  title: string;
  children: React.ReactNode;
}

const WaitTimesWrapper: React.FC<WaitTimesWrapperProps> = ({
  title,
  children,
}) => {
  return (
    <div className="flex justify-center w-full p-4">
      <div className="bg-gray-100 shadow-lg text-slate-700 rounded-2xl flex flex-col p-4">
        <h1 className="font-bold flex justify-center p-2">{title}</h1>
        {children}
      </div>
    </div>
  );
};

export default WaitTimesWrapper;
