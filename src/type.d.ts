interface visionProps {
  title: string;
  previewText?: string;
  details: React.ReactNode;
  image: imageObj;
  id: number;
}

interface imageObj {
  src: string;
  alt: string;
}

