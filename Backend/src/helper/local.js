const local = (clave, elemento) => {

    const userLocal = localStorage.setItem(clave, JSON.stringify(elemento))

    

    console.log(userLocal)

}

export default local