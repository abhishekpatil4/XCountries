import Grid from '@mui/material/Grid';
import axios from "axios"
import { useState, useEffect } from 'react';

export const FlagsGrid = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const url = "https://restcountries.com/v3.1/all";
            try {
                const res = await axios.get(url);
                console.log("name: ", res.data[0].name.official)
                console.log("flag src: ", res.data[0].flags.png)
            } catch (e) {
                console.log("err:", e.response);
            }
        }
        getData();
    }, [])
    return <>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4} lg={2}>
                <span>hi</span>
            </Grid>
        </Grid>
    </>
}