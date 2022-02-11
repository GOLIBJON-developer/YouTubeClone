import React from "react";
import { Grid } from "@material-ui/core";
import VideoItem from "./VideoItem";
const VideoList = ({ video, onVideoSelect }) => {
  const listOfVideos = video.map((video, id) => (
    <VideoItem onVideoSelect={onVideoSelect} key={id} video={video} />
  ));
  return (
    <Grid container spacing={5}>
      {listOfVideos}
    </Grid>
  );
};

export default VideoList;
