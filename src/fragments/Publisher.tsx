import { PropsWithChildren } from 'react';

type PublisherProps = {
  name: string | null;
  className: string | undefined;
};

const Publisher = (props: PropsWithChildren<PublisherProps>) => {
  return (
    <div className={!props.className ? '' : props.className}>
      <h1>Test {props.name}</h1>
    </div>
  );
};

export default Publisher;
