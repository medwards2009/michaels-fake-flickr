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
      <div className="border-2 rounded-lg flex flex-col">
        <h1 className="flex justify-center p-2">{title}</h1>
        {children}
      </div>
    </div>
  );
};

export default WaitTimesWrapper;
