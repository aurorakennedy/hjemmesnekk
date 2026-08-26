type Photo = {
  src: string;
  alt: string;
  shape?: "square" | "portrait" | "landscape";
};

type PhotoGroupProps = {
  photos: Photo[];
  captions?: string[];
  captionPosition?:
    | "below"
    | "below-right"
    | "right"
    | "above"
    | "left"
    | "overlay";
};

const PhotoGroup = ({
  photos,
  captions,
  captionPosition = "below",
}: PhotoGroupProps) => (
  <div className={`photo-group photo-group--caption-${captionPosition}`}>
    <div className="photo-group-images">
      {photos.map((photo) => (
        <img
          key={photo.src}
          className={`photo photo--${photo.shape ?? "square"}`}
          src={photo.src}
          alt={photo.alt}
        />
      ))}
    </div>
    {captions && (
      <div className="photo-group-captions">
        {captions.map((text) => (
          <span className="about-caption" key={text}>
            {text}
          </span>
        ))}
      </div>
    )}
  </div>
);

export default PhotoGroup;
