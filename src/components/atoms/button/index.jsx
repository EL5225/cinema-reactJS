export const Button = ({ children, className }) => {
  return (
    <button
      className={`py-2 px-3 rounded-md w-auto h-auto hover:bg-slate-100 ${className} `}
    >
      {children}
    </button>
  );
};
