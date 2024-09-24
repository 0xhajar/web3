import Part from "components/Part/Part"
const Content = (props) => {
    return(
        <p>
            <Part part={props.part1} exercises={props.exercises1} />
            <Part part={props.part2} exercises={props.exercises2} />
            <Part part={props.part3} exercises={props.exercises3} />
        </p>
    )
}

export default Content