const channels=[{
    thumbnailSrc: "images/thumbnails/thumbnail-1.webp",
    videoTime: "14:23",
    videoLink: "https://www.youtube.com/watch?v=n2RNcPRtAiY",
    profilePicture: "images/channel-pictures/channel-1.jpg",
    profilePictureTooltip: "/images/channel-pictures/channel-1.jpg",
    channelLink: "https://www.youtube.com/c/mkbhd",
    title: "Talking Tech and AI with Google CEO Sundar Pichai!",
    author: "Marques Brownlee",
    views: "4.2M",
    uploaded: "6 months ago",
    subscriberCount: "15M"
  }];

  channels.forEach((channel) => {
  const html = `
    <div class="video-preview">
      <div class="thumbnail-row">
        <a href="${channel.videoLink}" target="_blank" class="video-title-link">
          <img class="thumbnail" src="${channel.thumbnailSrc}">
        </a>
        <div class="video-time">${channel.videoTime}</div>
      </div>

      <div class="video-info-grid">
        <div class="channel-picture">
          <div class="profile-picture-container"> 
            <a href="${channel.channelLink}" target="_blank">
              <img class="profile-picture" src="${channel.profilePicture}">
            </a>
            <div class="channel-tooltip">
              <img class="channel-tooltip-picture" src="${channel.profilePictureTooltip}">
              <div>
                <div class="channel-tooltip-name">
                  ${channel.author}
                </div>
                <div class="channel-tooltip-stats">
                  ${channel.subscriberCount} subscribers
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="video-info">
          <a href="${channel.videoLink}" target="_blank" class="video-title-link">
            <p class="video-title">
              ${channel.title}
            </p>
          </a>
          <p class="video-author">${channel.author} ${channel.verified ? "&#10003;" : ""}</p>
          <p class="video-stats">${channel.views} views &#183; ${channel.uploaded}</p>
        </div>
      </div>
    </div>
  `;

  document.querySelector('.videos-container').innerHTML += html;
});
