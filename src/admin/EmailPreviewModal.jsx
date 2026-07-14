export default function EmailPreviewModal({ url, onClose }) {
  if (!url) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4" onClick={onClose}>
      <div
        className="flex h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-xl border border-border bg-panel"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-3">
          <h3 className="text-sm font-semibold text-text">Email Preview</h3>
          <button type="button" onClick={onClose} className="text-xs font-semibold text-text-muted hover:text-gold">
            Close
          </button>
        </div>
        <iframe src={url} title="Email preview" className="min-h-0 flex-1 bg-white" />
      </div>
    </div>
  );
}
