export default function CheckBox({className, text, ...rest }) {
  return (
    <div className={className}>
      <input type="checkbox" {...rest} />
      <span> {text}</span>
    </div>
  );
}
