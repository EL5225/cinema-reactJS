export const Button = ({ children, className, onClick }) => {
  return (
    <button
      className={`py-2 px-3 rounded-md w-auto h-auto hover:bg-slate-100 dark:hover:bg-zinc-600 ${className} `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
