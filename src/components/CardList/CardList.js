import React from "react";
import Card from "../Card/Card";

const CardList = ({people, images}) => {
    return (
        <div>
            {
                people.map((person, i) => (
                        <Card
                            key={i}
                            name={person.name}
                            world={person.world}
                            wikiLink={person.wikiLink}
                            image={images[i]}
                        />
                    )
                )
            }
        </div>
    );
};

export default CardList; 