export interface User {
  username: string;
  token: string;
}

export interface Question {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface QuizSettings {
  amount: number;
  category: string;
  difficulty: string;
}

export interface Score {
  _id: string;
  userId: string;
  username: string;
  score: number;
  total: number;
  category: string;
  difficulty: string;
  createdAt: string;
}

export interface AuthContextType {
  user: User | null;
  login: (token: string, username: string) => void;
  logout: () => void;
}
