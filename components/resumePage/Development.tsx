export default function Development() {
  return (
    <div className="pt-11">
      <div className="mb-7">
        <h3 className="capitalize text-2xl text-gray-300">TensorFlow / PyTorch</h3>
        <progress
          className="progress progress-warning w-full bg-gray-800 mt-2.5"
          value="90"
          max="100"
        ></progress>
      </div>

      <div className="mb-7">
        <h3 className="capitalize text-2xl text-gray-300">OpenAI / LangChain</h3>
        <progress
          className="progress progress-warning w-full bg-gray-800 mt-2.5"
          value="80"
          max="100"
        ></progress>
      </div>

      <div className="mb-7">
        <h3 className="capitalize text-2xl text-gray-300">AWS / Azure / GCP</h3>
        <progress
          className="progress progress-warning w-full bg-gray-800 mt-2.5"
          value="88"
          max="100"
        ></progress>
      </div>

      <div>
        <h3 className="capitalize text-2xl text-gray-300">Docker / Kubernetes</h3>
        <progress
          className="progress progress-warning w-full bg-gray-800 mt-2.5"
          value="95"
          max="100"
        ></progress>
      </div>
    </div>
  );
}
