const Header = (props) => {
  return (
    <div>
      <p>El nombre del curso es {props.name}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Parte 
        name={props.parte1.name} //esta es la forma de llamar a una propiedad de un obejto 
        ejercicios={props.parte1.exercises}
      />

      <Parte
        name={props.parte2.name}
        ejercicios={props.parte2.exercises}
      />

      <Parte
        name={props.parte3.name}
        ejercicios={props.parte3.exercises}
      />
    </div>
  )
}

const Parte = (props) => {
 return (  
<p>La parte  se llama {props.name} y tiene un total de ejercicios {props.ejercicios}</p>
)  
}

const Total = (props) => {
  return (
    <div>
      <p>El numero total de ejercicios es {props.total} </p>
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
//Lo que hacemos aqui a diferencia del anterior es convertir en objetos
//Objetos en JavaScript
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }

  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }

  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header name={course} />

      <Content
        parte1={part1} //aqui llamas a toda la caja que contiene el objeto part1
        parte2={part2}
        parte3={part3}
      />

      <Total
        total={part1.exercises + part2.exercises + part3.exercises}
      />
    </div>
  )
}

export default App
