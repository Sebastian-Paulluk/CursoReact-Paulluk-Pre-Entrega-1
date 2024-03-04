const NavBar =()=> {
    const items = ["Componentes de PC", "Notebooks", "Periféricos", "Monitores"];
    
    return(
        <nav>
            <ul>
                {items.map((item, index)=>{
                    return <li key={index}>{item}</li>
                })}
            </ul>
        </nav>
    )
}

export { NavBar };