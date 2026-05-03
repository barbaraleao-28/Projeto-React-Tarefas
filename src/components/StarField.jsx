const listaDeEstrelas = [
  { top: '8%', left: '12%', tamanho: 'h-1 w-1', brilho: 'animate-pulse' },
  { top: '14%', left: '78%', tamanho: 'h-1.5 w-1.5', brilho: 'animate-pulse' },
  { top: '22%', left: '45%', tamanho: 'h-1 w-1', brilho: 'animate-pulse' },
  { top: '30%', left: '88%', tamanho: 'h-2 w-2', brilho: 'animate-pulse' },
  { top: '38%', left: '18%', tamanho: 'h-1.5 w-1.5', brilho: 'animate-pulse' },
  { top: '46%', left: '58%', tamanho: 'h-1 w-1', brilho: 'animate-pulse' },
  { top: '54%', left: '8%', tamanho: 'h-1.5 w-1.5', brilho: 'animate-pulse' },
  { top: '62%', left: '72%', tamanho: 'h-2 w-2', brilho: 'animate-pulse' },
  { top: '70%', left: '32%', tamanho: 'h-1 w-1', brilho: 'animate-pulse' },
  { top: '82%', left: '90%', tamanho: 'h-1.5 w-1.5', brilho: 'animate-pulse' },
  { top: '18%', left: '6%', tamanho: 'h-1 w-1', brilho: 'animate-pulse' },
  { top: '76%', left: '52%', tamanho: 'h-1.5 w-1.5', brilho: 'animate-pulse' },
]

function StarField() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {listaDeEstrelas.map((estrela, indice) => (
        <span
          key={indice}
          className={`absolute rounded-full bg-white/90 ${estrela.tamanho} ${estrela.brilho}`}
          style={{ top: estrela.top, left: estrela.left }}
        />
      ))}
    </div>
  )
}

export default StarField
