import Grid from '@mui/material/Grid';
import axios from "axios"
import { useState, useEffect } from 'react';
import { FlagCard } from './FlagCard';

export const FlagsGrid = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const url = "https://restcountries.com/v3.1/all";
            try {
                const res = await axios.get(url);
                console.log("name: ", res.data[0])
                setData(res.data);
            } catch (e) {
                console.log("err:", e.response);
            }
        }
        getData();
    }, [])
    return <>
        <Grid container spacing={2}>
            {data && data.map((d, idx) =>
                <Grid item xs={12} sm={6} md={4} lg={2} key={idx}>
                    <FlagCard name={d.name.official} url={d.flags.png}/>
                </Grid>
            )}
        </Grid>
    </>
}