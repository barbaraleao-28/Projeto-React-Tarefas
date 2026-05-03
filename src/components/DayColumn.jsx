function DayColumn({ dia }) {
  return (
    <div className="rounded-3xl border border-purple-500/30 bg-slate-800/60 p-4 text-slate-100 backdrop-blur">
      <h2 className="text-lg font-semibold">{dia}</h2>
    </div>
  )
}

export default DayColumn
