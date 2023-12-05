export const Button = ({text = "Botón", variant = "btn-primary", onClick}) => {
    return (
<Button className={`btn ${variant} m-2`} onClick={onClick}> {text}</Button> )
}
