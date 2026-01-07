export async function fetchVideo(query) {
  const res = await fetch(`/api/video?id=${query}`);
  const data = await res.json();
  //   console.log("2 vdata beinmg fetch: " + data.video);

  return data.video;
}
