 

interface Props {
  children: string;
} 

const Heading = ( { children }:Props ) => {

  return <h1 className="display-6">{children}</h1>;
  
}

export default Heading