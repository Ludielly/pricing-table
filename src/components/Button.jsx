import "../styles/button.css";

const Button = ({ children, type }) => {
  return (
    <button
      className={`btn ${
        type === "secondary" ? "btn-secondary" : "btn-primary"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
