type Todo = {
  userId: number;
  id: string;
  title: string;
  completed: boolean;
  comment?: string | undefined;
};

export default Todo;
