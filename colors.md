<!-- # YAMIGAMI Color Palette

## Core Brand Colors

### Primary Purples

- `#9810fa` - Main purple (vibrant, electric)
- `#7c0cd6` - Darker purple
- `#b833ff` - Lighter purple
- `#6b0bb8` - Deep purple
- `#c966ff` - Pastel purple

### Accent Cyan/Teal

- `#1fa098` - Main cyan/teal
- `#17857d` - Darker teal
- `#28c9bd` - Lighter teal
- `#0d6b65` - Deep teal
- `#3de6d8` - Bright cyan

### Whites/Grays

- `#ffffff` - Pure white
- `#f5f5f5` - Off-white
- `#e5e5e5` - Light gray
- `#d1d1d1` - Medium gray
- `#a8a8a8` - Dim gray
- `#6b6b6b` - Dark gray

---

## Extended Palette

### Backgrounds (Dark)

- `#0a0014` - Deepest black-purple (void)
- `#1a0033` - Dark purple bg
- `#2d0052` - Medium dark purple (midnight)
- `#0f0f1a` - Almost black

### Functional Colors

#### Success (Correct answers)

- `#10b981` - Success green
- `#059669` - Darker green
- `#34d399` - Lighter green

#### Error (Wrong answers)

- `#ef4444` - Error red
- `#dc2626` - Darker red
- `#f87171` - Lighter red

#### Warning (Time running out)

- `#f59e0b` - Warning amber
- `#d97706` - Darker amber
- `#fbbf24` - Lighter amber

---

## Gradients

### Primary Gradient (Purple)

```css
linear-gradient(135deg, #9810fa 0%, #b833ff 100%)
```

### Accent Gradient (Cyan to Purple)

```css
linear-gradient(135deg, #1fa098 0%, #9810fa 100%)
```

### Dark Gradient (Background)

```css
linear-gradient(135deg, #0a0014 0%, #2d0052 100%)
```

### Glow Gradient (Hover effects)

```css
linear-gradient(135deg, #9810fa 0%, #1fa098 100%)
```

---

## Tailwind Config

```js
theme: {
  extend: {
    colors: {
      yamigami: {
        purple: {
          DEFAULT: '#9810fa',
          dark: '#7c0cd6',
          light: '#b833ff',
          deep: '#6b0bb8',
          pastel: '#c966ff',
        },
        cyan: {
          DEFAULT: '#1fa098',
          dark: '#17857d',
          light: '#28c9bd',
          deep: '#0d6b65',
          bright: '#3de6d8',
        },
        bg: {
          void: '#0a0014',
          dark: '#1a0033',
          midnight: '#2d0052',
          almost: '#0f0f1a',
        },
      },
      success: {
        DEFAULT: '#10b981',
        dark: '#059669',
        light: '#34d399',
      },
      error: {
        DEFAULT: '#ef4444',
        dark: '#dc2626',
        light: '#f87171',
      },
      warning: {
        DEFAULT: '#f59e0b',
        dark: '#d97706',
        light: '#fbbf24',
      },
    },
  },
}
```

---

## Usage Examples

### Buttons

```tsx
// Primary button
className = "bg-yamigami-purple hover:bg-yamigami-purple-light";

// Accent button
className = "bg-yamigami-cyan hover:bg-yamigami-cyan-light";

// Gradient button
className = "bg-linear-to-r from-yamigami-purple to-yamigami-cyan";
```

### Backgrounds

```tsx
// Card background
className = "bg-yamigami-bg-midnight border border-yamigami-purple/30";

// Page background
className =
  "bg-linear-to-br from-yamigami-bg-void via-yamigami-bg-dark to-black";
```

### Text

```tsx
// Headings
className = "text-white";

// Body
className = "text-gray-300";

// Accents
className = "text-yamigami-cyan";
className = "text-yamigami-purple";

// Success/Error
className = "text-success";
className = "text-error";
```

### Borders

```tsx
// Subtle border
className = "border border-yamigami-purple/20";

// Highlighted border
className = "border-2 border-yamigami-cyan";

// Glow effect
className = "border border-yamigami-purple shadow-lg shadow-yamigami-purple/50";
```

---

## Color Combinations

### Purple + Cyan (Main combo)

```tsx
<div className="bg-yamigami-bg-midnight border border-yamigami-purple/30">
  <h3 className="text-yamigami-cyan">Title</h3>
  <p className="text-gray-300">Description</p>
</div>
```

### Dark bg + Purple accent

```tsx
<div className="bg-yamigami-bg-void border-l-4 border-yamigami-purple">
  <p className="text-white">Important info</p>
</div>
```

### Gradient text

```tsx
<h1 className="bg-linear-to-r from-yamigami-purple to-yamigami-cyan bg-clip-text text-transparent">
  YAMIGAMI
</h1>
``` -->
