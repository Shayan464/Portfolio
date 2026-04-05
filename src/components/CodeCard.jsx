import { useEffect, useState } from 'react';

const CodeCard = () => {
  const code = [
    [
      { t: 'const ', c: '#569CD6' },
      { t: 'shayan', c: '#9CDCFE' },
      { t: ' = {', c: '#D4D4D4' },
    ],
    [
      { t: '  role', c: '#9CDCFE' },
      { t: ': ', c: '#D4D4D4' },
      { t: '"Software Engineer"', c: '#CE9178' },
      { t: ',', c: '#D4D4D4' },
    ],
    [
      { t: '  stack', c: '#9CDCFE' },
      { t: ': ', c: '#D4D4D4' },
      { t: '["React", "Node", "TS"]', c: '#CE9178' },
      { t: ',', c: '#D4D4D4' },
    ],
    [
      { t: '  available', c: '#9CDCFE' },
      { t: ': ', c: '#D4D4D4' },
      { t: 'true', c: '#B5CEA8' },
      { t: ',', c: '#D4D4D4' },
    ],
    [
      { t: '  passion', c: '#9CDCFE' },
      { t: ': ', c: '#D4D4D4' },
      { t: '"Building things"', c: '#CE9178' },
    ],
    [{ t: '};', c: '#D4D4D4' }],
    [],
    [
      { t: 'shayan', c: '#9CDCFE' },
      { t: '.', c: '#D4D4D4' },
      { t: 'build', c: '#DCDCAA' },
      { t: '(', c: '#D4D4D4' },
      { t: '"your idea"', c: '#CE9178' },
      { t: ');', c: '#D4D4D4' },
    ],
  ];

  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayed, setDisplayed] = useState([]);

  useEffect(() => {
    if (lineIndex >= code.length) {
      setTimeout(() => {
        setDisplayed([]);
        setLineIndex(0);
        setCharIndex(0);
      }, 1500);
      return;
    }

    const currentLine = code[lineIndex];
    const fullText = currentLine.map((t) => t.t).join('');

    if (charIndex <= fullText.length) {
      const timeout = setTimeout(() => {
        const newDisplayed = [...displayed];

        let count = 0;
        const coloredLine = currentLine.map((tok) => {
          const part = fullText.slice(count, count + tok.t.length);
          const visiblePart = part.slice(0, Math.max(0, charIndex - count));
          count += tok.t.length;

          return { ...tok, visible: visiblePart };
        });

        newDisplayed[lineIndex] = coloredLine;
        setDisplayed(newDisplayed);
        setCharIndex((prev) => prev + 1);
      }, 25);

      return () => clearTimeout(timeout);
    } else {
      setLineIndex((prev) => prev + 1);
      setCharIndex(0);
    }
  }, [charIndex, lineIndex]);

  return (
    <>
      <style>{`
        @keyframes blink {
          0%,100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>

      <div
        style={{
          background: '#1e1e1e', // VS Code background
          border: '1px solid #2a2a2a',
          borderRadius: '1.25rem',
          padding: '1.75rem',
          fontFamily: "'Fira Code', monospace",
          fontSize: '0.8rem',
          lineHeight: '1.8',
          position: 'relative',
        }}
      >
        {/* dots */}
        <div style={{ display: 'flex', gap: 6, marginBottom: '1.25rem' }}>
          {['#ef4444', '#f59e0b', '#22c55e'].map((c, i) => (
            <div
              key={i}
              style={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                background: c,
              }}
            />
          ))}
        </div>

        {/* code */}
        {displayed.map((line, i) => (
          <div key={i}>
            {line.map((tok, j) => (
              <span key={j} style={{ color: tok.c }}>
                {tok.visible}
              </span>
            ))}
          </div>
        ))}

        {/* cursor */}
        <span
          style={{
            display: 'inline-block',
            width: 2,
            height: '1em',
            background: '#569CD6',
            marginLeft: 2,
            animation: 'blink 1s step-end infinite',
          }}
        />
      </div>
    </>
  );
};

export default CodeCard;
