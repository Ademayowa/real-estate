interface Props {
  title: string;
  text?: string;
}

export default function SectionTitle({ title, text }: Props) {
  return (
    <div className='text-center'>
      <h2 className='text-2xl font-bold tracking-wide text-white md:text-4xl'>
        {title}
      </h2>
      <p className='mt-1 text-xl font-bold tracking-wide text-grayColor'>
        {text}
      </p>
    </div>
  );
}
