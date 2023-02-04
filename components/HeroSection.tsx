interface Props {
  title: string;
  text: string;
}

export default function HeroSection({ title, text }: Props) {
  return (
    <>
      <h1 className='max-w-md text-3xl font-bold capitalize tracking-wider text-white md:max-w-3xl md:text-[64px] md:leading-tight'>
        {title}
      </h1>
      <p className='mt-8 text-lg font-light !leading-normal tracking-wide text-white md:mt-5 md:max-w-2xl md:text-2xl lg:w-9/12'>
        {text}
      </p>
    </>
  );
}
