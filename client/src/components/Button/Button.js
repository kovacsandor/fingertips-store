export const Button = ({ children, onClick }) => {
  return (
    <button
      className="bg-fingertips-red text-fingertips-light-gray width-full p-4 rounded text-center text-xs"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
