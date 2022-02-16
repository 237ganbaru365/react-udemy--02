import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* スプレッド演算子を使ってpropsを渡すと、inputに入力されたkeyが自動的に紐付けられる */}
      <input {...props.input} />
    </div>
  );
};

export default Input;
