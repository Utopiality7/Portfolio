import Title from "../Title";
import Blog from "./Blog";
import Pagination from "./Pagination";

export default function Blogs() {
  return (
    <div className="bg-gray-900 w-full max-h-full h-full overflow-y-scroll myScroll">
      <Title name="blogs" />

      <ul className="grid grid-cols-2">
        <li className="relative vCustomLine pt-10 px-12">
          <Blog imageUrl="/images/b-1.jpg" releasedDate="Oct 12, 2025" />
          <Blog imageUrl="/images/b-2.jpg" releasedDate="Oct 12, 2025" />
        </li>
        <li className="pt-10 px-12">
          <Blog imageUrl="/images/b-3.jpg" releasedDate="Oct 12, 2025" />
          <Blog imageUrl="/images/b-1.jpg" releasedDate="Oct 12, 2025" />
        </li>
      </ul>

      <div className="px-12 mb-14">
        <Pagination />
      </div>
    </div>
  );
}
