function AccordionContainer(props) {
    const { children, title } = props
    return (
        <div id="faq">
            <h1 className=" text-center my-12 ml-10 text-3xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">{title}</span></h1>
            <div className=' grid grid-cols-1 place-content-center m-9'>
                {children}
            </div>
        </div>
    )
}

export default AccordionContainer