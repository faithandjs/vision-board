interface AuthCtxProp {
  currentUser: User | null;
  submitting: boolean;
  setIsSubmitting: React.Dispatch<React.SetStateAction<boolean>>;
  login: ({ email, password }: authProp) => void;
  signup: ({ email, password }: authProp) => void;
}
interface authProp {
  email: string;
  password: string;
}

