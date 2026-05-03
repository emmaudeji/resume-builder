// components/A4Page.tsx

export function A4Page({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center bg-muted py-6">
      <div
        className="bg-white shadow-md"
        style={{
          width: "210mm",
          minHeight: "297mm",
          padding: "20mm",
        }}
      >
        {children}
      </div>
    </div>
  )
}