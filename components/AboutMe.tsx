import MyInfo from "./MyInfo";

export default function AboutMe() {
  return (
    <div className="px-12 py-10">
      <h3 className="leading-[1.8] text-2xl font-normal text-gray-500">
        <p className="font-semibold text-[1.6rem]">
          Hello there! I am Anh Thach.
        </p>
        Senior AI Full-Stack Developer & Mobile App developer from Toronto,
        Canada for 8+ years of experience. I have rich experience in full-stack
        development, also I am good at mobile development. I love to talk with
        you about our unique.
      </h3>

      <ul className="location grid grid-cols-2 mt-6 gap-y-2">
        <MyInfo field="age" value={String(new Date().getFullYear() - 1995)} />
        <MyInfo field="residence" value="Canada" />
        <MyInfo field="freelance" value="Available" />
        <MyInfo field="address" value="Toronto, Canada" />
      </ul>
    </div>
  );
}
