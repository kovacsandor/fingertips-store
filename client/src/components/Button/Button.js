import classNames from "classnames";

export const Button = ({ children, disabled, onClick }) => {
  return (
    <button
      className={classNames("bg-fingertips-red text-fingertips-light-gray width-full p-4 rounded text-center text-xs", {
        'bg-fingertips-steel': disabled,
      })}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
