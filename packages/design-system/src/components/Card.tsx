type CardProps = {
  classNames?: string;
  title: string;
  onClick?: () => void;
};

export const Card = (props: CardProps): JSX.Element => {
  return (
    <button onClick={props.onClick}>
      <div
        className={`w-[250px] h-[350px] bg-red border border-4 p-2 rounded-md flex justify-center items-center ${props.classNames}`}
      >
        <div className="text-[70px] font-body text-center text-white">{props.title}</div>
      </div>
    </button>
  );
};
