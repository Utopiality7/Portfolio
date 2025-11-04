import MyInfo from "../MyInfo";

export default function Location() {
  return (
    <div className="p-12">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887319.0549499277!2d-81.68931992128952!3d43.65348170694063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d0e56a0f19%3A0x7e7f12f6ed0aaf89!2sToronto!5e0!3m2!1sen!2sca!4v1666978319596!5m2!1sen!2sca"
        style={{ border: 0 } as React.CSSProperties}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-96"
      />
      <ul className="location grid grid-cols-2 mt-10 gap-y-2">
        <MyInfo field="address" value="Toronto, Canada" />
        <MyInfo field="email" value="deepl.lead0907@gmail.com" />
        <MyInfo field="phone" value="+1 (412) 778-9988" />
        <MyInfo field="status" value="Available" />
      </ul>
    </div>
  );
}
