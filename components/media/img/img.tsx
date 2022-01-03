import Image from "next/image";
import { FunctionComponent } from "react";
import { ASSET_PATH } from "../../../config/cloudinary";

// TODO:
//  1. Make static types for transform options for safety
//  2. Add objectFit and objectPosition https://nextjs.org/docs/api-reference/next/image#objectfit
//  3. Perhaps just pass all args spread out and keep imageSrcPath functionality
//  4. for layout-fill https://github.com/vercel/next.js/blob/canary/examples/image-component/pages/layout-fill.js

type ImgPropsType = {
  imgSrc?: string;
  alt?: string;
  ext?: "jpg" | "png" | "webp";
  transform?: string[] | undefined;
  width?: number;
  height?: number;
  layout?: "fixed" | "responsive" | "fill" | "intrinsic";
  isPriority?: boolean;
};

const Img: FunctionComponent<ImgPropsType> = (props) => {
  const {
    imgSrc = "Photo_Aug_07_8_24_23_AM_ucibq5",
    alt = "",
    ext = "webp",
    transform,
    width = 435,
    height = 580,
    layout = undefined,
    isPriority = false,
  } = props;

  let transformClasses = "";

  if (transform) {
    // join
    transformClasses = transform.join();
  }

  // https://cloudinary.com/blog/painless_image_and_video_manipulation_with_javascript
  const imgSrcPath = `${transformClasses}/v1639606444/portfolio/${imgSrc}.${ext}`;

  return (
    <>
      {isPriority ? (
        <Image
          src={imgSrcPath}
          alt={alt}
          layout={layout}
          width={width}
          height={height}
          priority={true}
        />
      ) : (
        <Image
          src={imgSrcPath}
          alt={alt}
          layout={layout}
          width={width}
          height={height}
        />
      )}
    </>
  );
};

export { Img };
export type { ImgPropsType };
