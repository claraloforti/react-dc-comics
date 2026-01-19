import Navbar from "./Navbar";

const MainHeader = () => {
    return (
        <header>
            <div className="container">
                <img src="/img/dc-logo.png" alt="logo" className="dc-logo" />
                <Navbar />
            </div>
        </header>
    )
}

export default MainHeader;