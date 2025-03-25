/////////////
// GET

// "https://restcountries.com/v2/all?fields=name,flag"

export async function getAdvice() {
  try {
    const res = await fetch("https://api.adviceslip.com/advice");
    const advice = await res.json();

    return advice;
  } catch {
    throw new Error("Could not fetch any advice");
  }
}
