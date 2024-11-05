type ErrorMessageProps = {
  message: string;
};

export function ErrorMessage({ message }: Readonly<ErrorMessageProps>) {
  return (
    <div className="text-red-500 text-center">
      <h2>Error</h2>
      <p>{message}</p>
    </div>
  );
}
