import './Backdrop.css'

export function Backdrop(props){
    return(
        <div className='backdrop' onClick={props.onClick}>
        </div>
    )
}