function simplifyPath(path: string): string {
  const segments = path.split('/')
  const st: string[] = []
  for (const s of segments) {
    if (s === '.' || s === '') {
      continue
    }
    if (s === '..') {
      st.pop()
      continue
    }
    st.push(s)
  }
  return `/${st.join('/')}`
}

// dumb
function _simplifyPath(path: string): string {
  const st: string[] = []
  path += '/'

  for (const s of path) {
    if (s !== '/') {
      st.push(s)
      continue
    }

    if (!st.length) {
      st.push(s)
      continue
    }

    // check the char before `/`
    if (st[st.length - 1] === '.') {
      // check if '/./' or '/../' exists
      let back = st.length - 2
      let periodCount = 1
      while (back >= 0) {
        if (st[back] === '.') {
          periodCount++
          back--
        } else if (st[back] === '/') {
          break
        } else {
          // reset period count when encountering regular chars
          periodCount = 0
          break
        }
      }
      if (periodCount === 1) {
        // /./
        // pop two chars `.` and `/`
        st.pop()
        st.pop()
      }
      if (periodCount === 2) {
        // /../
        // pop three chars `.`, `.` and `/`
        st.pop()
        st.pop()
        st.pop()
        // then pop one directory (pop until next `/`)
        while (st.length && st[st.length - 1] !== '/') {
          st.pop()
        }
      }
    }
    if (st[st.length - 1] === '/') {
      // NOTE: check multiple consecutive `/`s last
      // to avoid importing new consecutive `/`s after resolving relative paths
      continue
    }
    // push the regular `/`
    st.push(s)
  }

  // remove trailing slash
  if (st.length > 1 && st[st.length - 1] === '/') {
    st.pop()
  }

  return st.join('')
}
