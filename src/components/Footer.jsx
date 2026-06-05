export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="py-10 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12
                      flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-display text-film-ivory text-lg">
          Lucy <em className="text-film-gold not-italic">Gong</em>
        </span>

        <p className="text-film-gray text-xs font-body tracking-wide text-center">
          © {year} Lucy Gong &nbsp;·&nbsp; All rights reserved.
        </p>

        <p className="text-film-gray/40 text-[10px] font-body tracking-widest uppercase">
          Filmmaker · Photographer
        </p>
      </div>
    </footer>
  )
}
