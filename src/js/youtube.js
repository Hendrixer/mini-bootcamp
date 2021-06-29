const videosElement = document.querySelector(".videos");

const Videos = {
  async getVideos(ids) {
    const idsParam = ids.map((id) => id.split("/").pop()).join(",");
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&key=AIzaSyD2dLCttifKxWr9wPZ6j6VHemFQsa8rIec&id=${idsParam}`
    );

    const data = await res.json();
    return data.items.map((item) => ({
      title: item.snippet.title,
      description: item.snippet.description,
      id: item.id,
      channel: item.snippet.channelTitle,
      embed: `https://youtube.com/embed/${item.id}`,
      likes: +item.statistics.likeCount,
      views: +item.statistics.viewCount
    }));
  },

  addVideoToPage(video) {
    var div = document.createElement("div");

    div.innerHTML = this.createTemplate(video).trim();
    const videoElement = div.firstChild;

    videosElement.appendChild(videoElement);
  },
  createTemplate(video) {
    return `<div class="col-xs-12
    col-md-6
    col-lg-4
    video-container
    ">
    <div class="video">
      <iframe
        width="100%"
        height="250px"
        src="${video.embed}"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <div class="video-info">
      <div class="author-image">
        <img src="https://i.pravatar.cc/30" alt="" />
      </div>
      <div>
        <div class="video-title">
          ${video.title}
        </div>
        <div class="video-stats">
          <div>
            ${video.channel}
          </div>
          <div>
            ${video.views} views - 4 months ago
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
  }
};
