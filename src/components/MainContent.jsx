import ComicsList from "./comics"

const MainContent = () => {
    return (
        <main>
            <section className="jumbo"></section>
            <ComicsList />
            <section className="info-section">
                <div className="container">
                    <ul>
                        <li>
                            <img src="img/buy-comics-digital-comics.png" alt="" />
                            DIGITAL COMICS</li>
                        <li>
                            <img src="img/buy-comics-merchandise.png" alt="" />
                            DC MERCHANDISE</li>
                        <li>
                            <img src="img/buy-comics-subscriptions.png" alt="" />
                            SUBSCRIPTION</li>
                        <li>
                            <img src="img/buy-comics-shop-locator.png" alt="" />
                            COMIC SHOP LOCATOR</li>
                        <li>
                            <img src="img/buy-dc-power-visa.svg" alt="" />
                            DC POWER VISA</li>
                    </ul>
                </div>
            </section>
        </main>
    )
}

export default MainContent