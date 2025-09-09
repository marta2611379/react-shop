function Button({
  children,
  className,
  variant = "primary",
  onClick,
}: {
  className?: string;
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "danger";
  onClick: () => void;
}) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg px-4 py-2 font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants: Record<typeof variant, string> = {
    primary:
      "text-[#FF9119] hover:text-white border border-[#FF9119] hover:bg-[#FF9119] font-medium rounded-lg text-sm px-2.5 text-center dark:border-[#FF9119] dark:text-[#FF9119] dark:hover:text-white dark:hover:bg-[#FF9119]",
    secondary:
      "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
