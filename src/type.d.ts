interface visionProps {
  title: string;
  bonus?: string;
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

interface toggle {
  position: 'top' | 'bottom';
  label: string;
  className?: string;
  name?: string;
  checked: boolean;
  disabled?: boolean;
}

