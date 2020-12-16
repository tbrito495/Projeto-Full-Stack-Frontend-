import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useProtect } from "../../ProtectedRoute/useProtect";
import { axiosConfig } from "../../Services/axiosConfig";
import RecipeReviewCard from "./styles";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from '@material-ui/core/CardMedia'
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Bground_2 from "../../img/bground_2.jpg"
import Bground_1 from "../../img/bground_1.jpg"

const MusicPage = props => {
  const { classes } = RecipeReviewCard();
  const [music, setMusic] = useState([]);
  const pathParams = useParams();
  const AllMusics = () => {
    axios
      .get(`http://localhost:3003/music/${pathParams.id}`, axiosConfig)
      .then(response => {
        console.log(response.data);
        setMusic(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  useEffect(() => {
    AllMusics();
    console.log(music);
  }, []);

  useProtect();

  return (
    <div>
      <Container >
        <Grid
          item
          xs={1}
          container
          spacing={0}
          direction=""
          alignItems="center"
          justify="center"
          style={{ minHeight: "100vh", minWidth: "1080px" }}

        >
          <Card className={classes.root}>
          <CardMedia
             image={Bground_2}>
            <CardHeader
              color="primary"
              title={music.author_name}
              subheader={music.title}
            />
            <audio src={music.file} controls />
            {/* <Typography component="h1" variant="h5">
          {music.title}
        </Typography> */}
            <CardContent>
              <Typography variant="body2" color="primary" component="p">
                Genero: {music.genre}
              </Typography>
              <Typography variant="body2" color="primary" component="p">
                Album: {music.album}
              </Typography>
            </CardContent>
            {/* <Typography component="h1" variant="h5">
          {music.author_name}
        </Typography> */}
            </CardMedia>
          </Card>
        </Grid>
      </Container>
    </div>
  );
};

export default MusicPage;
