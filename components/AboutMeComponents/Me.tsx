import NextImage from "next/image";

export function Me() {
  return (
    <aside
      className={`w-auto h-auto max-w-[140px] max-h-[140px] rounded-full border-4 border-secondary
        md:max-w-[200px] md:max-h-[200px] transform 2xl:hover:scale-105 duration-500 ease-in-out`}
    >
      <NextImage
        src="/images/me.png"
        alt={"Me"}
        priority
        width={356}
        height={356}
        style={{ width: "100%", height: "auto", borderRadius: 9999 }}
      />
    </aside>
  );
}
