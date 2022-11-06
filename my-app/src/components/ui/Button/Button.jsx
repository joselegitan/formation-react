function Button({ loading, children, className, ...props }) {
  return (
    <button className={`Button ${className}`} {...props}>
      {loading
        ? 'Loading'
        : children
      }
    </button>
  );
}

export default Button;
