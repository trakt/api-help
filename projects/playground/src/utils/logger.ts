export const logger = {
  statement: (...message: string[]) => {
    console.log(`! ${message.join(' ')}`);
  },
  query: (...message: string[]) => {
    console.log(`? ${message.join(' ')}`);
  },
  output: (...message: string[]) => {
    console.log(`=\t ${message.join(' ')}`);
  },
  error: (...message: string[]) => {
    console.error(`.x.\t ${message.join(' ')}`);
  },
};
