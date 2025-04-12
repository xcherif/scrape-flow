export default function WaitFor(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
