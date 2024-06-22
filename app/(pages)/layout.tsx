export default function MdxLayout({ children }: { children: React.ReactNode }) {
    // Create any shared layout or styles here
    return <div className="prose !max-w-none prose-sm md:prose-base lg:prose-lg prose-slate !prose-invert !mt-5">{children}</div>
  }