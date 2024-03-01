/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '*.png' {
  const content: any;
  export default content;
}

// declare module 'react' {
//   interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
//     // extends React's HTMLAttributes
//     custom?: string;
//   }
// }

enum Stock {
  'BACKORDER',
  'IN_STOCK',
  'OUT_OF_STOCK',
  'SPECIFIC_ORDER',
}

export type Categories = {
  description: string;
  id: number;
  image_set: [{ image: string; id: number }];
  name: string;
};

export type Good = {
  category: { id: number; name: string };
  description: string;
  height: number;
  id: number;
  image_set: [{ image: string }];
  length: number;
  mini_description: string;
  mini_image: string;
  name: string;
  price: number;
  review_count: number;
  slug: string;
  stars: number;
  stock: string[Stock];
  width: number;
  quantity: number;
};
