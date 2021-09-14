export default function CheckBox({ text, ...rest }) {
  return (
    <level>
      <input type="checkbox" {...rest} />
      <span> {text}</span>
    </level>
  );
}
