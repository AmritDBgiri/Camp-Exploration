import Image from "next/image";
import clsx from "clsx";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  title: string;
  icon?: string;
  variant?: string;
  full?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  type = "button",
  title,
  icon,
  variant = "",
  full = false,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "flex items-center justify-center gap-3 rounded-full border px-4 py-2 transition-all",
        variant,
        { "w-full": full, "opacity-50 cursor-not-allowed": disabled }
      )}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <span className="font-semibold whitespace-nowrap">{title}</span>
    </button>
  );
};

export default Button;
