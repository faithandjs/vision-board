interface visionProps {
  title: string;
  bonus?: string;
  details: React.ReactNode;
  image: imageObj;
  id: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
  active: number;
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

interface toggleCtxProps {
  flip_all: boolean;
  vision_board: boolean;
}

