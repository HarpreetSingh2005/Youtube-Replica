"use client";
import { useState, useEffect } from "react";
import { fetchVideos } from "../services/youtubeSearch";
import React from "react";
import SearchResults from "@/components/searchResults/searchResults";
import { useSearchParams } from "next/navigation";
export default function Search() {
  const search_query = useSearchParams();
  const query = search_query.get("search_query");

  const [videosDetails, setVideosDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!query) return;

    setLoading(true);
    fetchVideos(query)
      .then(setVideosDetails)
      .finally(() => setLoading(false));
  }, [query]);

  return (
    <div className="searchResults">
      <SearchResults search_query={query} videos={videosDetails} />
    </div>
  );
}
