interface RowProps {
  id: string;
  name: string;
  waitTime: string;
}

const Row: React.FC<RowProps> = ({ id, name, waitTime }) => {
  return (
    <div key={id} className="flex justify-between p-2 gap-20">
      <p>{name}</p>
      <p>{waitTime || ""}</p>
    </div>
  );
};

export default Row;
