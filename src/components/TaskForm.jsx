import { useState } from 'react'

const diasDaSemana = [
  'Segunda',
  'Terca',
  'Quarta',
  'Quinta',
  'Sexta',
  'Sabado',
  'Domingo',
]

function TaskForm() {
  const [titulo, setTitulo] = useState('')
  const [diaEscolhido, setDiaEscolhido] = useState(diasDaSemana[0])
  const [prioridadeEscolhida, setPrioridadeEscolhida] = useState('Media')

  return (
    <section className="mb-6 rounded-3xl border border-purple-500/30 bg-slate-800/60 p-5 text-slate-100 backdrop-blur">
      <h2 className="mb-4 text-xl font-semibold">Nova tarefa</h2>
      <form className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
        <input
          type="text"
          className="rounded-2xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-slate-100 outline-none"
          placeholder="Escreve sua tarefa"
          value={titulo}
          onChange={(evento) => setTitulo(evento.target.value)}
        />
        <select
          className="rounded-2xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-slate-100 outline-none"
          value={diaEscolhido}
          onChange={(evento) => setDiaEscolhido(evento.target.value)}
        >
          {diasDaSemana.map((dia) => (
            <option key={dia} value={dia}>
              {dia}
            </option>
          ))}
        </select>
        <select
          className="rounded-2xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-slate-100 outline-none"
          value={prioridadeEscolhida}
          onChange={(evento) => setPrioridadeEscolhida(evento.target.value)}
        >
          <option value="Baixa">Baixa</option>
          <option value="Media">Media</option>
          <option value="Alta">Alta</option>
        </select>
        <button
          type="submit"
          className="rounded-2xl bg-gradient-to-r from-purple-600 to-blue-500 px-4 py-3 font-medium text-white"
        >
          Adicionar
        </button>
      </form>
    </section>
  )
}

export default TaskForm
