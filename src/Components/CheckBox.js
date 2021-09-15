export default function CheckBox({className, text, ...rest }) {
  return (
    <level className={className}>
      <input type="checkbox" {...rest} />
      <span> {text}</span>
    </level>
  );
}
