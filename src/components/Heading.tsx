

interface Props {
  children: string;
} 

const Heading = ( { children }:Props ) => {

  return (
  <>
      <img className="mb-3 d-inline" src="/src/images/list.png" />
      <h1 className="mx-3 d-inline display-6">{children}</h1>
  </>
  )
  
}

export default Heading