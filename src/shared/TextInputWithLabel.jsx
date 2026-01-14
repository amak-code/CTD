const TextInputWithLabel = ({ label, value, onChange, ref, elementId }) => {
  return (
    <>
      <label htmlFor={elementId}>{label}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        id={elementId}
        ref={ref}
      />
    </>
  );
};

export default TextInputWithLabel;
