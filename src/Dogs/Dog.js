import { useParams } from "react-router-dom";

function Dog({dogs}) {

    const {name} = useParams();

    const curDog = dogs.find(d => d.name.toLowerCase() === name)

    if (!curDog) {
        return (
            <div className="No-Dog-Found">
                <h1>"{name}" Not Found!</h1>
            </div>
        )
    }

    return (
        <div className="Dog">
            <h1>{curDog.name}</h1>
            <h1>Age: {curDog.age}</h1>
            <img src={curDog.src}/>
            <ul>
                <h2>Facts:</h2>
                {curDog.facts.map( (i, idx) => <li key={idx}>{i}</li>)}
            </ul>
        </div>
    )
}

export default Dog;