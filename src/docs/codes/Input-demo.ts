export const InputUseCode = `
const [value, setValue] = useState<string>('');
const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
  setValue(e.target.value);
  
 <Input label="姓名" value={value} onChange={handleInputChange} />
`;

export const InputWidthCode = `
<Input /*...*/ inputWidth={400} />
<Input /*...*/ inputWidth={200} /> // default
<Input /*...*/ inputWidth={100} />
`;
