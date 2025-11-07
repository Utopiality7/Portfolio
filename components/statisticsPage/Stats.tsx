import Title from "../Title";
import StatisticsList from "./statistic/StatisticsList";
import LinksList from "./linkItem/LinksList";

export default function Statistics() {
  return (
    <section className="h-full overflow-y-scroll myScroll">
      <Title name="statistics" />
      <StatisticsList />

      <Title name="links" />
      <LinksList />
    </section>
  );
}
