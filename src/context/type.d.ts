interface AuthCtxProp {
  currentUser: User | null;
  setcurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
  board: dataType;
}
interface authProp {
  email: string;
  password: string;
}

interface BoardType {
  title: string;
  image: {
    src: string;
    alt: string;
  };
  details: {
    [key: string]: any;
  };
}
interface dataType {
  theme: string;
  data: BoardType[];
}

