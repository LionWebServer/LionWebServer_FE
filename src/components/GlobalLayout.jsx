import './GlobalLayout.css'

export default function GlobalLayout({ children }) {
  return (
    <div className="global-layout">
      {children}
    </div>
  );
}