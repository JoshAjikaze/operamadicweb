import { RegisterBanner } from "components/Others/RegisterBanner"
import Navbar from "components/Navbar/Navbar"
import Footer from "components/footer/Footer"
import { Outlet } from "react-router-dom"

const Index = () => {
    return (
        <section className="bg-relianceRed/10">
            <Navbar />
            <Outlet />
            <RegisterBanner />
            <Footer />
        </section>
    )
}

export default Index