import {useEffect, useState} from "react";

type Plant = {
    latin: string
}

export default function PlantSearch() {

    const [searchInput, setSearchInput] = useState("");
    const [plant, setPlant] = useState<Plant[]>([]);

    function fetchPlant() {
        fetch(`http://localhost:8080/plant/latin/${searchInput}`)
            .then((res) => {
                return res.json();
            })
            .then((plants) => setPlant(plants))
            .catch((error) => console.log(error));

        console.log(plant)
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        fetchPlant();
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        event.preventDefault();
        setSearchInput(event.target.value);
    }

    useEffect(() => {
        fetchPlant();
    }, [])

    return (
        <div className="bg-offWhite h-[90vh] overflow-scroll">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="mt-[5vh] ml-[2vw] bg-primary opacity-50 w-[30vw] h-[5vh] placeholder:text-white placeholder:p-3 rounded-full"
                    placeholder="Search plant ..."
                    value={searchInput}
                    onChange={handleChange}
                />
            </form>
            {plant && plant.map(plantitem => (
                <p key={plantitem.latin}>{plantitem.latin}</p>
            ))}
        </div>
    )
}