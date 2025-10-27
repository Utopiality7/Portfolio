import CodingSkeleton from "./CodingSkeleton";

export default function Coding() {
  return (
    <div className="pt-11 pb-4 grid grid-cols-2 gap-y-16 gap-x-10">
      <div className="text-center">
        <div
          className="radial-progress text-main-orange text-2xl"
          style={{ "--value": 95, "--size": "9rem" } as React.CSSProperties}
        >
          <span className="text-gray-300">95%</span>
        </div>
        <p className="text-2xl text-gray-300 mt-2.5">Python / TypeScript</p>
      </div>
      {/* <CodingSkeleton /> */}

      <div className="text-center">
        <div
          className="radial-progress text-main-orange text-2xl"
          style={{ "--value": 90, "--size": "9rem" } as React.CSSProperties}
        >
          <span className="text-gray-300">90%</span>
        </div>
        <p className="text-2xl text-gray-300 mt-2.5">React / React Native</p>
      </div>
      {/* <CodingSkeleton /> */}

      <div className="text-center">
        <div
          className="radial-progress text-main-orange text-2xl"
          style={{ "--value": 92, "--size": "9rem" } as React.CSSProperties}
        >
          <span className="text-gray-300">92%</span>
        </div>
        <p className="text-2xl text-gray-300 mt-2.5">Node.js / Next.js</p>
      </div>
      {/* <CodingSkeleton /> */}

      <div className="text-center">
        <div
          className="radial-progress text-main-orange text-2xl"
          style={{ "--value": 88, "--size": "9rem" } as React.CSSProperties}
        >
          <span className="text-gray-300">88%</span>
        </div>
        <p className="text-2xl text-gray-300 mt-2.5">Swift / Kotlin</p>
      </div>
      {/* <CodingSkeleton /> */}
    </div>
  );
}
