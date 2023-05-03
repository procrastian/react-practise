import { useState } from "react"
import { RenderRoll } from '../RenderRoll'

const initialRoll = [
    {
        diceType: 'D-6',
        result: `rolled a 6!`
    }
]

function DiceRoller() {

const [result, setResult] = useState(initialRoll)



const handleRoll = (e) => {
    e.preventDefault()

    const userNum = Number(e.target[0].value)
    const rolledNum = Math.floor((Math.random()*userNum) +1)
    const newRoll = {
        diceType: `D-${userNum}`,
        result: `rolled a ${rolledNum}!`
    }

    setResult([newRoll, ...result])

}

    return (

        <div>
            <h1>Let's Roll!</h1>
            <div>
                <form onSubmit={handleRoll}>
                    <label>
                        Up to what number?
                        <br/>
                        <input type="text"/>
                    </label>
                    <button>Roll!</button>
                </form>
                
            </div>

            {
            result.map((resultObj, index) => <RenderRoll key={index} result={resultObj}/>)
            }



        </div>

    )

}

export default DiceRoller