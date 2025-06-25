function evalRPN(tokens: string[]): number {
  const s: number[] = []

  for (const t of tokens) {
    if (['+', '-', '*', '/'].includes(t)) {
      // note the order of operands
      const operand2 = s.pop() as number
      const operand1 = s.pop() as number
      let result = 0
      switch (t) {
        case '+':
          result = operand1 + operand2
          break
        case '-':
          result = operand1 - operand2
          break
        case '*':
          result = operand1 * operand2
          break
        case '/':
          result = Math.trunc(operand1 / operand2)
          break
      }
      s.push(result)
    } else {
      s.push(Number(t))
    }
  }

  return s.pop() as number
}
