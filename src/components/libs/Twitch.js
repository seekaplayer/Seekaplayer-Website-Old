import axios from "axios";

const path = "https://api.twitch.tv/helix";
const clientID = "6rwhuhiuubip353ysn8war2y240be8";

export const TwitchUserData = () => {
  return axios
    .get(`${path}/users?login=seekaplayer`, {
      headers: {
        "client-id": clientID,
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const TwitchGetFollowers = () => {
  const userData = TwitchUserData();
  return userData
    .then((data) => {
      if (data) {
        const userID = data.data[0].id;
        return axios
          .get(`${path}/users/follows?to_id=${userID}`, {
            headers: {
              "client-id": clientID,
            },
          })
          .then((res) => {
            const followers = res.data;
            return followers;
          })
          .catch((err) => {
            console.log(err);
          });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const TwitchGetViewers = () => {
  return axios
    .get(`${path}/users?login=seekaplayer`, {
      headers: {
        "client-id": clientID,
      },
    })
    .then((res) => {
      return res.data.data[0].view_count;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const TwitchGetVideos = () => {
  const userData = TwitchUserData();
  return userData
    .then((data) => {
      if (data) {
        const userID = data.data[0].id;
        return axios
          .get(`${path}/videos?user_id=${userID}`, {
            headers: {
              "client-id": clientID,
            },
          })
          .then((res) => {
            return res.data;
          })
          .catch((err) => {
            console.log(err);
          });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const TwitchGetClips = () => {
  const userData = TwitchUserData();
  return userData
    .then((data) => {
      if (data) {
        const userID = data.data[0].id;
        return axios
          .get(`${path}/clips?broadcaster_id=${userID}`, {
            headers: {
              "client-id": clientID,
            },
          })
          .then((res) => {
            return res.data;
          })
          .catch((err) => {
            console.log(err);
          });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
