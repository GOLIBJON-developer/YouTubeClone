import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { SearchBar, VideoDetail, VideoList } from "./components";
import youtube from "./api/youtube";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleSubmit = async (searchTerm) => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyCwfd8Ce9YWGyjKXcFxsCK_yR8SCIYAFbw",
        q: searchTerm,
      },
    });
    setVideos(response.data.items) 
    setSelectedVideo(response.data.items[0]);
  };

  return (
    <Grid justifyContent="center" container spacing={10}>
      <Grid item xs={12}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onFormSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={8}>
            <VideoDetail video={selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            <VideoList video={videos} onVideoSelect={setSelectedVideo} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default App;
