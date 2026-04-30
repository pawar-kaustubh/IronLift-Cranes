export default function Button({ className = "", ...props }) {
  return <button className={className} {...props} />;
}
