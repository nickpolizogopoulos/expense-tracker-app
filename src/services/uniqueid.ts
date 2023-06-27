
const uniqueId = ( length = 6 ) => {
    return parseInt(Math.ceil(Math.random( ) * Date.now( )).toPrecision(length).toString( ).replace(".", ""))
}

export default uniqueId