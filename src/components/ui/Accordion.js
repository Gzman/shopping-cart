import "./Accordion.css"

const Accordion = ({ classes, title, children, isColapsed }) => {
    return (
        <div className={`accordion ${classes}`}>
            <div className="accordion-header">
                <h4 className="accordion-title">{title}</h4>
            </div>
            {
                isColapsed
                && <div className="accordion-body">
                    {children}
                </div>
            }
        </div>
    )
}

export { Accordion }