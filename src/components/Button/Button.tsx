interface ButtonProps {
  label: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, className }) => (
  <button className={className} type="button">
    {label}
  </button>
);

export default Button;
