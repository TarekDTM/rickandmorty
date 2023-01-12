import {  Button, Grid, Typography,} from '@mui/material'
import { Container } from '@mui/system'
import { CHARACHTERS_QUERY } from '../../backend';

import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client';
import { MediaCard } from '../../components'
import { Character, SerachFilter } from '../../common';
import usePagination from '@mui/material/usePagination/usePagination';


export  function Home() {

    const [page, setPage] = useState<number>(1);
    const [filter, setFilter] = useState<SerachFilter>({name:'',})
    const { data, loading, error} = useQuery(CHARACHTERS_QUERY ,{
        variables:{
           page: page,
           filter: filter,
        }
   })


useEffect(() => {
    console.log("🚀 ~ file: index.tsx:20 ~ Home ~ data", data)
}, [data]);

if (loading) {
   return  <div style={{justifyContent: 'center'}}>Loading</div>
}

if (error) {
   console.log(error);
   return <div>Something went wrong</div>
}


  return (
    <Container>
      {
         <Grid justifyContent={'center'} container columns={3} columnGap={10} rowGap={10}>
            {
               data?.characters?.results.map((i :Character) => (<MediaCard image={i.image} name={i.name} status={i.status}/>))
               
            }
         </Grid>

      }
      <nav style={{ display: 'flex', justifyContent:'space-evenly', marginBottom: '2%', marginTop: '2%', flexDirection: 'row', alignItems: 'center'}}>
      <Button disabled={!page} size='small' onClick={() => setPage(prev => prev - 1)}>
      Back
      </Button>
      <Typography variant='body2'>
         {page}
      </Typography>
      <Button size='small'  onClick={() => setPage(prev => prev + 1)}>
      Next
      </Button>
      </nav>
    </Container>
  )
}
