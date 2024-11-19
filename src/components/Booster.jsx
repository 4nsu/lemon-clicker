import shortenNumber from "../utils/shortenNumber"

function Booster(props) {

    const value = shortenNumber(props.value)

    return (
        <div className="booster">
            {value} lemons / click
        </div>
    )

}

export default Booster