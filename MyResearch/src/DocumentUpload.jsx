import React from "react";
import Header from "./components/Header";
import Search from "./components/Search";

const DocumentUpload = () => {
  return (
    <main className="container mx-auto px-4 flex flex-col items-center justify-center gap-5">
      <Search bigText />
      <p>
        Welcome to our recommender system! Copy and paste the contents of the
        research paper with topics you are interested in researching. Our
        dynamic topic modeling algorithm will recommend some papers in our
        corpus that should relate to the research that you are investigating.
        The advantage of this recommendation is that it is much more powerful
        than a traditional Google or Pubmed search query. Our algorithm bridges
        the gap between changes in diction, syntax, and sentence structure over
        time. In other words, the language in this paper could be different but
        it ultimately discusses the same topic as the text you entered. The
        advantage here is that we could recommend a paper written 100 years
        earlier with less common words that matches the context of your paper.
        Additionally, we don't keyword match which is what popular search
        engines like Google do. We match based on the hellinger distance between
        the topic distribution of the text you entered and each paper in our
        corpus. The model you are querying now split our corpus into 10 topics
        and binned the time years into 16 buckets.
      </p>
    </main>
  );
};

export default DocumentUpload;
