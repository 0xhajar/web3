import img from '../../assets/img.png'

const Header = (props) => {
    return (
        <div>
            <img src={img} alt="logo" />
            <h1>{props.course}</h1>
        </div>
    )
}

export default Header