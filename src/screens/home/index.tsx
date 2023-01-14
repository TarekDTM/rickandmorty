import {  Button, Grid,  Typography,} from '@mui/material'
import { Container } from '@mui/system'
import { CHARACHTERS_QUERY } from '../../backend';

import React, { useCallback, useEffect, useState } from 'react'
import { useQuery } from '@apollo/client';
import { MediaCard } from '../../components'
import { Character, SerachFilter } from '../../common';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
   root: {
      display: 'flex',
      justifyContent:'space-evenly',
      marginBottom: '2%',
      marginTop: '2%',
      flexDirection: 'row', 
      alignItems: 'center'
   },
 });




export  function Home() {

    const [page, setPage] = useState<number>(1);
    const [filter, setFilter] = useState<SerachFilter>({name:'',})
    const { data, loading, error} = useQuery(CHARACHTERS_QUERY ,{
        variables:{
           page: page,
           filter: filter,
        }
   })
   const renderItem = useCallback((i :Character) => (<MediaCard key={i.id} image={i.image} name={i.name} status={i.status}/>),[])
   const classes = useStyles();
  

   const goToNextPage = () => {
   setPage(prev => prev + 1)
   }

   const goToPrevPage = () => {
   setPage(prev => prev - 1)
   }

   if (loading) {
   return  <div style={{justifyContent: 'center'}}>Loading</div>
   }

   if (error) {
   return <div>Something went wrong</div>
   }


  return (
    <Container>
      {
         <Grid justifyContent={'center'} container columns={3} columnGap={10} rowGap={10}>
            {
               data?.characters?.results.map(renderItem)
               
            }
         </Grid>

      }
      <nav  className={classes.root}>
      <div  >

      <Button data-testid="Back" disabled={page === 1 } size='small' onClick={goToPrevPage}>
      Back
      </Button>
      </div>
      <div >

      <Typography data-testid={'Page'} variant='body2'>
         {page}
      </Typography>
      </div>
      <div >

      <Button data-testid ="Next"  size='small'  onClick={goToNextPage}>
      Next
      </Button>
      </div>
      </nav>
    </Container>
  )
}
