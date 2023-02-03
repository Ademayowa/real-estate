interface Props {
  title: string;
  text: string;
}

export default function HeroSection({ title, text }: Props) {
  return (
    <>
      <h1 className='max-w-2xl text-3xl font-bold capitalize tracking-wider text-white md:text-[64px] md:leading-normal lg:leading-snug'>
        {title}
      </h1>
      <p className='mt-4 w-9/12 text-lg font-light tracking-wide text-white md:mt-5 md:max-w-md md:text-2xl'>
        {text}
      </p>
    </>
  );
}
