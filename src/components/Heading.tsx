

interface Props {
  children: string;
} 

const Heading = ( { children }:Props ) => {

  return (
  
    <div className="d-flex">
      <img className="mx-3" src="/src/images/list.png" />
      <h1 className="display-6">{children}</h1>
    </div>
  )
  
}

export default Heading