import { forwardRef } from 'react';

type Props = {
  children: React.ReactNode;
  type: 'submit' | 'button';
};

export type Ref = HTMLButtonElement;

const Button = forwardRef<Ref, Props>((props, ref) => {
  return (
    <button ref={ref} className="MyClassName" type={props.type}>
      {props.children}
    </button>
  );
});

Button.displayName = 'Button';

export { Button };
