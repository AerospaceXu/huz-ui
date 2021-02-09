interface Props {
    messageType: "success" | "error";
    text: string;
}
declare const message: ({ messageType, text }: Props) => void;
export default message;
