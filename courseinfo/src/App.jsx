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
      <Parte name={props.parte1} ejercicios={props.ejercicios1} /> 
      <Parte name={props.parte2} ejercicios={props.ejercicios2} />  
      <Parte name={props.parte3} ejercicios={props.ejercicios3} />  
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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      
      <Header name={course}/>

      <Content parte1={part1} ejercicios1={exercises1}  parte2={part2} ejercicios2={exercises2} parte3={part3} ejercicios3={exercises3} />
      
      <Total total={exercises1+exercises2+exercises3} />
      
    </div>
  )
}

export default App
