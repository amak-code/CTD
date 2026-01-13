const TextInputWithLabel = ({ label, value, onChange, ref, elementId }) => {
  return (
    <div>
      <label htmlFor={elementId}>{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        id={elementId}
        ref={ref}
      />
    </div>
  );
};

export default TextInputWithLabel;
