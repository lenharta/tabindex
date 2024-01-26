export default function Toolbox() {
  return (
    <div>
      <span>Toolbox</span>
    </div>
  );
}

// import * as React from 'react';
// import { Page } from '@/components/layouts';

// interface CardProps {
//   disabled?: boolean;
//   readonly?: boolean;
// }

// interface TextProps {
//   span?: boolean;
//   strong?: boolean;
// }

// const findTextComponent = (props: Partial<TextProps>) => {
//   const { span, strong } = props;
//   if (span) return 'span';
//   if (strong) return 'strong';
//   return 'p';
// };

// const Text: <T extends Factory.Tag = 'p'>(
//   props: Factory.Properties<T, TextProps>,
//   ref: Factory.Reference<T>
// ) => React.ReactNode = React.forwardRef(
//   <T extends Factory.Tag>(props: Factory.Properties<T, TextProps>, ref: Factory.Reference<T>) => {
//     const { component, children, span, strong, ...otherProps } = props;
//     const Component = findTextComponent({ span, strong });
//     return (
//       <Component {...otherProps} ref={ref}>
//         {children}
//       </Component>
//     );
//   }
// );

// const DemoComponent = () => {
//   return (
//     <div>
//       <p>DEMO COMPONENT</p>
//       <p>DEMO COMPONENT</p>
//       <p>DEMO COMPONENT</p>
//       <Card>Card</Card>
//       <Button>Button</Button>
//       <p>DEMO COMPONENT</p>
//       <p>DEMO COMPONENT</p>
//       <p>DEMO COMPONENT</p>
//     </div>
//   );
// };

// export default function Toolbox() {
//   return (
//     <Page>
//       <Page.Header />
//       <Page.Hero headline="Toolbox" />
//       <Page.Content>
//         {/* <IconGallery /> */}
//         <DemoComponent />
//       </Page.Content>
//     </Page>
//   );
// }
