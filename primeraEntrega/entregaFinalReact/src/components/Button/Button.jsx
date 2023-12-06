export const Button = ({text = "Botón", variant = "btn-primary", onClick}) => {
    return (
<button className={`btn ${variant} m-2`} onClick={onClick}> {text}</button> )
}
