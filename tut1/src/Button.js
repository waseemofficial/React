const Button = ({ className, setFullname }) => {
  const sub = (e) => {
    e.preventDefault();
    if (className === "clear") {
      setFullname("");
    } else {
      setFullname("asdas");
    }
  };

  return (
    <button className={className} onClick={sub}>
      {className}
    </button>
  );
};
export default Button;
