const TOKEN = import.meta.env.VITE_EVAL_TOKEN as string;

export async function Log(
  stack: string,
  level: string,
  pkg: string,
  message: string
) {
  try {
    await fetch("http://20.244.56.144/evaluation-service/logs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${TOKEN}`,
      },
      body: JSON.stringify({
        stack: stack.toLowerCase(),
        level: level.toLowerCase(),
        package: pkg.toLowerCase(),
        message,
      }),
    });
  } catch (err) {
    console.error("Failed to log:", err);
  }
}
