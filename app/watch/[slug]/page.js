import VideoPlay from "../../../components/playSection/playSection";
import MoreVideos from "../../../components/playSection/moreVideos/moreVideos";
import { videosDetails } from "@/app/constants";
export default async function videoPlay({ params, children }) {
  const video = await params;
  return (
    <>
      <main>{children}</main>
      <div className="content">
        <VideoPlay videoId={video.slug} />
        <MoreVideos />
      </div>
    </>
  );
}
