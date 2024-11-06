function CardContainer(props) {
    const { children, title } = props
    return (
        <div id="productos">
            <h1 className=" text-center my-12 ml-10 text-3xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">{title}</span></h1>
            <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-content-center gap-9 m-9'>
                {children}
            </div>
        </div>
    )
}

export default CardContainer