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
        name={props.parts[0].name} 
        ejercicios={props.parts[0].exercises}
      />

      <Parte
        name={props.parts[1].name}
        ejercicios={props.parts[1].exercises}
      />

      <Parte
        name={props.parts[2].name}
        ejercicios={props.parts[2].exercises}
      />
    </div>
  )
}

const Parte = (props) => {
 return (  
  <p>
  La parte  se llama {props.name} y tiene un total de ejercicios {props.ejercicios}
  </p>
)  
}

const Total = (props) => {
  return (
    <div>
      <p>El numero total de ejercicios es {props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises} </p>
    </div>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header name={course.name} />

      <Content parts={course.parts} />

      <Total parts={course.parts} />
    </div>
  )
}

export default App
