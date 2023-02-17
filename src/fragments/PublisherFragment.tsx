import { PropsWithChildren } from 'react';

type PublisherFragmentProps = {
  name: string | null;
  className: string | undefined;
};

const PublisherFragment = (
  props: PropsWithChildren<PublisherFragmentProps>
) => {
  return (
    <div className={!props.className ? '' : props.className}>
      <h1>Test {props.name}</h1>
    </div>
  );
};

export default PublisherFragment;
