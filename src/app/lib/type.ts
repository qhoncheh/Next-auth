export interface User {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  login: {
    uuid: string;
    username: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}

export interface ApiResponse {
    results: User[];
}

export interface AuthContextType {
    user: User | null;
    login: (user: User) => void;
    logout: () => void;
}
