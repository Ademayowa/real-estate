interface Props {
  title: string;
  text?: string;
  fontBold?: boolean;
}

export default function SectionTitle({ title, text, fontBold }: Props) {
  return (
    <div className='text-center'>
      <h2 className='text-2xl font-bold tracking-wide text-white md:text-4xl'>
        {title}
      </h2>
      <p
        className={`mx-auto mt-1 max-w-3xl text-xl ${
          fontBold && 'font-bold'
        }  tracking-wide text-grayColor`}
      >
        {text}
      </p>
    </div>
  );
}
