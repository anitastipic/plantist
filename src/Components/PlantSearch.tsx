import React, {useEffect, useState} from "react";

type Plant = {
    latin: string,
    toleratedlight: string,
    watering: string,
}

export default function PlantSearch() {

    const [searchInput, setSearchInput] = useState("");
    const [suggestions, setSuggestions] = useState<Plant[]>([]);

    useEffect(() => {
        if (searchInput) {
            fetch(`http://localhost:8080/plant/search/${searchInput}`)
                .then(res => res.json())
                .then(data => setSuggestions(data))
                .catch(err => console.log(err));
        } else {
            setSuggestions([]);
        }
    }, [searchInput]);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        event.preventDefault();
        setSearchInput(event.target.value);
    }

    function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
        event.preventDefault();
    }

    return (
        <div className="bg-offWhite h-[90vh] w-screen">
            <div className="search-container">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={searchInput}
                        onChange={handleChange}
                        placeholder="Search for plant..."
                        className="focus:outline-green-950 my-[4vh] ml-[2vw] bg-primary p-3 opacity-50 w-[30vw] h-[5vh] text-white placeholder:text-white rounded-full"
                    />
                </form>
                <div className="bg-offWhite grid grid-cols-3 gap-x-1 gap-y-5 w-screen mx-[2.5vw] mt-[2vh]">
                    {suggestions.map(plant =>
                        <div
                            className="hover:border-primary justify-center  w-[45vh] h-[70vh] bg-white border rounded-2xl">
                            <img className="w-[45vh] h-auto rounded-t-2xl"
                                 src={`/plants/${Math.floor(Math.random() * 14) + 1}.png`}/>
                            <div className="w-[45vh] text-center">
                                <p className="font-logo text-lg pt-2">{plant.latin}</p>
                                <div className="w-[45vh] grid grid-cols-1 place-items-center p-2 gap-1">
                                    <div className="pt-4 w-5 h-5 bg-yellow-300 rounded-full"></div>
                                    <p className="text-sm">{plant.toleratedlight}</p>
                                    <div className="mt-2 w-5 h-5 bg-blue-400 rounded-b-[50%] rounded-tl-[50%] rotate-[-45deg]"></div>
                                    <p className="text-sm max-w-[43vh]">{plant.watering}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}