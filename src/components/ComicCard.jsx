const ComicCard = (props) => { // props è l'oggetto che contiene i dati passati dal componente padre (Comics)

    // Destructuring
    const { thumb, series } = props.comic; // Prendo da props.comic solo thumb e series e li salvo in due variabili
    // Che è equivalente a 
    // const thumb = props.comic.thumb;
    // const series = props.comic.series;

    return (
        <div className="comic-card">
            <img src={thumb} alt={series} />
            <p>{series}</p>
        </div>
    )
}

export default ComicCard