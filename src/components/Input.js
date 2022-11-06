const Input = (props) => {
  return (
    <div className={`${props.className} ${props.classNameC}`}>
      <label htmlFor={props.id} className={props.classNameL}>
        {props.label}
      </label>
      <input
        className={props.classNameI}
        type={props.type}
        placeholder={props.placeholder}
        id={props.id}
        onChange={props.onchange}
        value={props.value}
      />
    </div>
  );
};

export default Input;
