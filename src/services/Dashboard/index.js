export const getPlaylists = async () => {
  const URL = "https://api.deezer.com/user/2529/playlists";
  const response = await fetch(URL, {
    method: "GET",
    mode: "no-cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origins": "*",
      "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
    },
  })
    .then((response) => response.json())
    .catch(function (error) {
      console.log(error);
    });
  console.log(response);
  return response;
};
