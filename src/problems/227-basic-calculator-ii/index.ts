function calculate(s: string): number {
  const st: number[] = []

  let num = 0
  let op: '+' | '-' | '*' | '/' = '+'

  for (let i = 0; i < s.length; i++) {
    const ch = s[i]

    if (/\d/.test(ch)) {
      num = num * 10 + Number(ch)
    }

    if ((!/\d/.test(ch) && ch !== ' ') || i === s.length - 1) {
      switch (op) {
        case '+':
          st.push(num)
          break
        case '-':
          st.push(-num)
          break
        case '*':
          st.push((st.pop() as number) * num)
          break
        case '/':
          st.push(Math.trunc((st.pop() as number) / num))
      }
      num = 0
      op = ch as '+' | '-' | '*' | '/'
    }
  }

  let result = 0
  for (const r of st) {
    result += r
  }

  return result
}
