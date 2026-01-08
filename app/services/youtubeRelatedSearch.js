export async function fetchRelatedVideos(id) {
  const res = await fetch(`/api/relatedSearch?channelId=${id}`);
  const data = await res.json();
  return data.items;
}
