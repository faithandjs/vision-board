interface AuthCtxProp {
  currentUser: User | null;
  setcurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
}
interface authProp {
  email: string;
  password: string;
}

