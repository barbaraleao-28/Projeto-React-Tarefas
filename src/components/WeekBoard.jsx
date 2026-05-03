import DayColumn from './DayColumn'

const diasDaSemana = [
  'Segunda',
  'Terca',
  'Quarta',
  'Quinta',
  'Sexta',
  'Sabado',
  'Domingo',
]

function WeekBoard({ listaTarefas, marcarConcluida, removerTarefa }) {
  return (
    <section className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-7">
      {diasDaSemana.map((dia) => (
        <DayColumn
          key={dia}
          dia={dia}
          listaTarefas={listaTarefas}
          marcarConcluida={marcarConcluida}
          removerTarefa={removerTarefa}
        />
      ))}
    </section>
  )
}

export default WeekBoard
