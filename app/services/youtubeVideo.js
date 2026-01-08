export async function fetchVideo(query) {
  const res = await fetch(`/api/video?id=${query}`);
  const data = await res.json();
  return data.video;
}
