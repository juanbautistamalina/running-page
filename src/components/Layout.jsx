import Navbar from './Navbar'
import Footer from "./Footer"
import Card from './Card'
import Carousel  from './Carousel'
import CardContainer from './CardContainer'
import Accordion from "./Accordion.jsx"
import AccordionContainer from './AccordionContainer'

function Layout() {
    return (
        <>
            <Navbar />
            <CardContainer title="Productos">
                <Card title="Producto 1" price="85.00" img={"product/producto-1.png"} />
                <Card title="Producto 2" price="30.00" img={"product/producto-2.png"} />
                <Card title="Producto 3" price="90.00" img={"product/producto-3.png"} />
                <Card title="Producto 4" price="50.00" img={"product/producto-4.png"} />
                <Card title="Producto 5" price="45.00" img={"product/producto-5.png"} />
                <Card title="Producto 6" price="69.99" img={"product/producto-6.png"} />
            </CardContainer>
            <Carousel />
            <AccordionContainer title="Preguntas Frecuentes">
                <Accordion />
            </AccordionContainer>
            <Footer/>
        </>
    )
}

export default Layout