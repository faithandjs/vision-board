interface imageObj {
  src: string;
  alt: string;
}
interface toggleCtxProps {
  flip_all: boolean;
  vision_board: boolean;
}

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
  num?: number | false;
}

interface cardProps extends BoardType {
  id: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
  active: number;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => void;
  values: {
    data: BoardType[];
  };
}

interface toggle {
  position: 'top' | 'bottom';
  label: string;
  className?: string;
  name?: string;
  checked: boolean;
  disabled?: boolean;
}

interface AuthCtxProp {
  currentUser: User | null;
  // setcurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
  board: dataType;
  setBoard: React.Dispatch<React.SetStateAction<dataType>>;

  // updateBoard: (data: dataType) => void;
}
interface authProp {
  email: string;
  password: string;
  displayName?: string;
}

interface BoardType {
  title: string;
  image: imageObj;
  list?: {
    list: string[];
    title?: string;
  };
  p?: string;
  check?: {
    list: {
      value: string;
      checked: boolean;
    }[];
    title?: string;
  };
}
interface dataType {
  title: string;
  theme: string;
  data: BoardType[];
}

interface authModalProp {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

