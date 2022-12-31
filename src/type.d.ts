interface visionProps {
  title: string;
  previewText?: string;
  details: React.ReactNode;
  image: imageObj;
  id: number;
  // color: number;
}

interface imageObj {
  src: string;
  alt: string;
}

