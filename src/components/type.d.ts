interface TextInputInterface {
  id: string;
  name: string;
  label?: string;
  type:
    | 'text'
    | 'email'
    | 'password'
    | 'tel'
    | 'search'
    | 'number'
    | 'date'
    | 'time';
  placeholder?: string;
  required?: boolean;
  class?: string;
  value?: any;
  disabled?: boolean;
  boxClass?: string;
  inline?: boolean;
}

interface visionProps {
  title: string;
  bonus?: string;
  details: React.ReactNode;
  image: imageObj;
  id: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
  active: number;
}
interface cardProps {
  title: string;
  details: {
    [key: string]: any;
  };
  image: imageObj;
  id: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
  active: number;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => void;
}

interface toggle {
  position: 'top' | 'bottom';
  label: string;
  className?: string;
  name?: string;
  checked: boolean;
  disabled?: boolean;
}

