export const InputUseCode = `
const [value, setValue] = useState<string>('');
const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
  setValue(e.target.value);
`;
