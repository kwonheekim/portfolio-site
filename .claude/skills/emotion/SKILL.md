# Emotion CSS-in-JS Helper

A specialized skill for working with Emotion, a powerful CSS-in-JS library. This skill helps you write, refactor, and optimize Emotion styles in your JavaScript/React projects.

## What This Skill Does

This skill assists with:

1. **Converting styles to Emotion**: Transform regular CSS or inline styles to Emotion's `css()` function or `styled()` components
2. **Writing Emotion code**: Generate proper Emotion syntax for @emotion/css, @emotion/react, and @emotion/styled packages
3. **Best practices guidance**: Provide recommendations on when to use `css()`, `styled()`, or css prop
4. **Theme integration**: Help set up and use Emotion themes
5. **Performance optimization**: Suggest ways to optimize Emotion styles (memoization, caching, etc.)
6. **Migration guidance**: Help migrate from other CSS-in-JS solutions to Emotion
7. **Responsive design**: Create responsive Emotion styles using media queries
8. **Dynamic styling**: Generate dynamic styles based on props and state

## Key Emotion Concepts

### @emotion/css (Framework Agnostic)
No setup or Babel plugin required. Perfect for framework-agnostic projects.

```javascript
import { css, cx } from '@emotion/css';

const className = css`
  color: hotpink;
  padding: 32px;
  background-color: #eee;
  border-radius: 4px;
  &:hover {
    background-color: #ddd;
  }
`;
```

Features:
- Auto vendor prefixing
- Nested selectors
- Media queries
- Use `cx()` to combine class names

### @emotion/react (React Optimized)
Use css prop directly on components. Best for component-level styles in React.

```jsx
import { css } from '@emotion/react';

<div css={css`color: hotpink;`}>
  Hello
</div>

// With dynamic styles
<div css={css`
  color: ${isActive ? 'hotpink' : 'gray'};
  font-weight: ${isBold ? 'bold' : 'normal'};
`}>
  Dynamic content
</div>
```

Features:
- Inline styles with full CSS support
- `ThemeProvider` integration
- Server-side rendering support
- Works seamlessly with React components

### @emotion/styled (Styled Components Pattern)
Create reusable styled components. Similar to styled-components library.

```javascript
import styled from '@emotion/styled';

const StyledButton = styled.button`
  color: hotpink;
  font-weight: bold;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

// With props
const StyledDiv = styled.div`
  color: ${props => props.color || 'black'};
  font-size: ${props => props.size || '16px'}px;
`;
```

## When to Use Each Approach

| Approach | Best For | Use Case |
|----------|----------|----------|
| `@emotion/css` | Framework-agnostic projects | Vanilla JS, Vue, Svelte without Babel |
| `@emotion/react` | React with inline styles | Component-level, dynamic styles |
| `@emotion/styled` | Reusable styled components | Component libraries, design systems |

## Common Patterns

### Responsive Styles
```javascript
const responsiveStyle = css`
  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 16px;
  }

  @media (min-width: 1024px) {
    font-size: 18px;
  }
`;
```

### Theme Integration
```jsx
import { ThemeProvider } from '@emotion/react';

const theme = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
  },
  spacing: {
    sm: '8px',
    md: '16px',
    lg: '24px',
  },
};

<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>
```

### Using Theme in Components
```jsx
import { useTheme } from '@emotion/react';

function Component() {
  const theme = useTheme();
  return (
    <div css={css`color: ${theme.colors.primary};`}>
      Themed content
    </div>
  );
}
```

## How to Use This Skill

Ask Claude Code to help with Emotion-related tasks:

- "Convert this CSS to Emotion styled components"
- "Help me set up Emotion theming in my React app"
- "Refactor these inline styles to use Emotion's css prop"
- "Show me how to create responsive styles with Emotion"
- "Help me optimize Emotion styles for performance"
- "Migrate this styled-components file to Emotion"
- "Create a Emotion styled component with dynamic props"

## Installation

```bash
# For React projects with css prop
npm install @emotion/react @emotion/styled

# For framework-agnostic projects
npm install @emotion/css

# Both packages together
npm install @emotion/react @emotion/styled @emotion/css
```

## Useful Resources

- **Official Documentation**: https://emotion.sh/
- **Emotion GitHub**: https://github.com/emotion-js/emotion
- **API Reference**: https://emotion.sh/docs/emotion
- **Best Practices**: https://emotion.sh/docs/best-practices

## Browser Support

Emotion supports all major browsers and Internet Explorer 11.

---

Let Claude Code assist you with any Emotion styling challenges!
