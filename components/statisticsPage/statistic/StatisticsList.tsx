"use client";

import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client/react";
import statisticOperations from "@/lib/graphql/statistic";
import Statistic from "./Statistic";
import StatisticsListSkeleton from "./StatisticsListSkeleton";
import { StatisticsData } from "@/types";

interface getStatistic {
  statistics: StatisticsData[];
}

async function fetchData(url: string) {
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

export default function StatisticsList() {
  const [pageViews, setPageViews] = useState<number>(0);
  const [totalArticles, setTotalArticles] = useState<number>(0);
  const [articleReactions, setArticleReactions] = useState<number>(0);

  const { data, loading, error } = useQuery<getStatistic>(
    statisticOperations.Queries.getStatistics
  );

  useEffect(() => {
    async function fetchApiData(): Promise<void> {
      const apiData = await Promise.all<number>([
        fetchData("/api/dev/totalArticles"),
        fetchData("/api/dev/reactions"),
        fetchData("/api/analytics/traffics"),
      ]);
      apiData[0] && setTotalArticles(apiData[0]);
      apiData[1] && setArticleReactions(apiData[1]);
      apiData[2] && setPageViews(apiData[2]);
    }
    fetchApiData();
  }, []);

  if (error) return <StatisticsListSkeleton />;

  if (loading || data === undefined) {
    return <StatisticsListSkeleton />;
  }

  return (
    <ul className="grid grid-cols-1 gap-5 px-12 py-8 sm:grid-cols-2 md:grid-cols-3">
      <Statistic title="page views" info={pageViews} />
      <Statistic
        title="articles"
        info={totalArticles}
        externalLink="https://dev.to/utopiality"
      />
      <Statistic
        title="total reactions"
        info={articleReactions}
        externalLink="https://dev.to/utopiality"
      />
      {data.statistics.map((s, i) => (
        <Statistic key={i} title={s.title} info={s.info} />
      ))}
    </ul>
  );
}
