export async function fetchRelatedVideos(id) {
  console.log("id recieved by me is : ", id);
  const res = await fetch(`/api/relatedSearch?channelId=${id}`);
  const data = await res.json();
  console.log("items length:", data.items?.length);

  console.log("related data is : ", data.items);
  return data.items;
}
