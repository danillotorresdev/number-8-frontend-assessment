
type ToastProps = {
  message: string;
  type?: "success" | "error" | "info";
  duration?: number;
};

export function Toast({ message, type = "info" }: Readonly<ToastProps>) {
  const backgroundColors: Record<string, string> = {
    success: "bg-green-500",
    error: "bg-red-500",
    info: "bg-blue-500",
  };

  const backgroundColor = backgroundColors[type] || backgroundColors["info"];

  return (
    <div
      className={`fixed top-5 right-5 z-50 text-white px-4 py-2 rounded shadow-lg ${backgroundColor}`}
    >
      {message}
    </div>
  );
}
