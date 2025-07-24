export const Greetings = (name?: string): GreetingsResponse => {
  const defaultName = 'Noname';
  return `Hello, ${name ?? defaultName} !!!`;
};
