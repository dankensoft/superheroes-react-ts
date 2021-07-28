import React, {useEffect, useRef, useState} from 'react';
// @ts-ignore
import { AutoSizer, CellMeasurer, CellMeasurerCache, Grid } from 'react-virtualized';

// Just a data fetching function
const fetchURL = "https://cors-anywhere.herokuapp.com/akabab.github.io/superhero-api/api/all.json";
const getItems = () => fetch(fetchURL).then(res => res.json());

const mediumHeart = process.env.PUBLIC_URL + '/assets/medium-heart/medium-heart.svg';

export const GeneralItem = () => {
    const [items, setItems] = useState<any[]>([]);

    useEffect(() => {
        getItems().then(data => setItems(data));
    }, []);

/*    const cache = useRef(
        new CellMeasurerCache({
            fixedWidth: true,
            defaultHeight: 100
        })
    )*/

    return (
        <>
            <div className="general-items" style={{ width: "1184px", height: "100vh" }}>
                <AutoSizer>
                    {({ width, height }:any) => (
                        <Grid
                            rowCount={20}
                            columnCount={4}
                            columnWidth={285}
                            height={height}
                            rowHeight={174}
                            width={width}
                            cellRenderer={() => {
                                return (
                                    <>
                                        {items.map((item, idx) => (
                                        <div className="card" key={idx}>
                                            <img src={item.images.sm} alt={"heroe"} className="card-image" />
                                            <div className="card-circle-heart">
                                                <img src={mediumHeart} alt={"medium-heart"} className="medium-heart"/>
                                            </div>
                                            <div className="card-box-text">
                                                <div className="card-name">{item.name}</div>
                                                <div className="card-fullname">Real Name: {item.biography.fullName}</div>
                                            </div>
                                        </div>
                                        ))}
                                    </>
                                );
                            }}
                        />
                    )}
                </AutoSizer>
            </div>
        </>
    )
}
