const init = async () => {
  const videos = await Videos.getVideos([
    "z8p9Elk1HZM",
    "https://youtu.be/C1kC0I1SfVM",
    "https://youtu.be/TS270yVSrWE",
    "https://youtu.be/Drd5BbdgsUo",
    "https://youtu.be/decDIkDbS3Q",
    "https://youtu.be/bCopvhn_Th4",
    "https://youtu.be/UDx4HAeB5ck",
    "https://youtu.be/4Qxr2DPUCmg",
    "https://youtu.be/HnY9LKxk5gM",
    "https://youtu.be/hoVNrWPX_qQ",
    "https://youtu.be/aaoPUwhlJlw"
  ]);

  videos.forEach((video) => {
    Videos.addVideoToPage(video);
  });
};

init();
