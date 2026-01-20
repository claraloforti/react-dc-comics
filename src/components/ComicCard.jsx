const ComicCard = ({ comic: { thumb, series } }) => {
    // Destrutturo direttamente le prop nei parametri del componente
    // prendendo thumb e series dall'oggetto comic passato dal genitore (Comics)
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