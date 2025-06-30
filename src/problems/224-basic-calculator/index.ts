export function calculate(s: string): number {
  const st: number[] = []
  let result = 0
  let number = 0
  let sign = 1

  for (let i = 0; i < s.length; i++) {
    const ch = s[i]
    if (!ch) continue
    if (/\d/.test(ch)) {
      number = number * 10 + Number(ch)
    } else if (ch === '+') {
      result += sign * number
      number = 0
      sign = 1
    } else if (ch === '-') {
      result += sign * number
      number = 0
      sign = -1
    } else if (ch === '(') {
      st.push(result)
      st.push(sign)
      sign = 1
      result = 0
    } else if (ch === ')') {
      result += sign * number
      number = 0
      result *= st.pop() as number // sign
      result += st.pop() as number // last result
    }
  }

  if (number) {
    result += sign * number
  }

  return result
}
