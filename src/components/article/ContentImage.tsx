interface ContentImageProps {
  src: string
  alt: string
  caption: string
}

export default function ContentImage({ src, alt, caption }: ContentImageProps) {
  return (
    <div
      className="content-image my-12 rounded-2xl overflow-hidden"
      style={{ border: '1px solid var(--border-color)' }}
    >
      <img src={src} alt={alt} className="w-full block" />
      <div
        className="image-caption px-6 py-4 font-mono text-sm"
        style={{
          background: 'var(--bg-card)',
          color: 'var(--text-muted)',
        }}
      >
        {caption}
      </div>
    </div>
  )
}
