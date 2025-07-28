import * as React from "react";

import { mergeClasses } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLElement> {}

const Container = React.forwardRef<HTMLElement, ContainerProps>(
  ({ className, children, ...props }: ContainerProps, ref) => {
    return (
      <section
        ref={ref}
        {...props}
        className={mergeClasses("w-full bg-gray", className)}
      >
        <div className="px-5 py-8 md:p-16 mx-auto max-w-7xl h-full">{children}</div>
      </section>
    );
  }
);

Container.displayName = "Container";

export default Container;
