import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components'
import { red } from '@material-ui/core/colors';
import React from 'react'

export const useStyles = makeStyles((theme) => ({
    root: {
      width: 550,
      height:225,
      alignContent: 'center',
      justifyContent: 'center'
    },
    
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
      
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
    
  }));
  
  export  default function RecipeReviewCard() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    return {classes, handleExpandClick}
    
}