const ComicCard = (props) => {

    // Destructuring
    const { thumb, series } = props.comic;

    return (
        <div className="comic-card">
            <img src={thumb} alt={series} />
            <p>{series}</p>
        </div>
    )
}

export default ComicCard