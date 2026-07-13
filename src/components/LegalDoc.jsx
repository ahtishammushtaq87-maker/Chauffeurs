export function Section({ title, children }) {
  return (
    <div className="border-b border-border py-10 first:pt-0 last:border-b-0 last:pb-0">
      <h2 className="font-serif text-2xl font-medium text-text">{title}</h2>
      <div className="mt-4 flex flex-col gap-4 text-[15px] leading-relaxed text-text-muted">{children}</div>
    </div>
  );
}

export function Dot({ children }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
      <span>{children}</span>
    </li>
  );
}
