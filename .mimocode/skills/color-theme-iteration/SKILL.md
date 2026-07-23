---
name: color-theme-iteration
description: Systematically update colors across React components with build verification
---

# Color Theme Iteration Skill

Systematically update color values across multiple React components, verify the build, and test the changes.

## When to Use

- User requests color changes (background, text, borders, shadows)
- User says colors are "too bright", "too dark", "not visible", or "don't match"
- Need to update the same color value across multiple files
- Iterating on theme colors based on user feedback

## Procedure

### 1. Identify Current Color Values
```bash
# Find all occurrences of the color to change
grep -r "COLOR_VALUE" src/ --include="*.jsx" --include="*.js"

# For Tailwind classes
grep -r "text-color\|bg-color\|border-color" src/ --include="*.jsx"
```

### 2. Plan the Changes
- List all files that need updating
- For each file, specify the exact change (old value → new value)
- Consider both Tailwind classes and CSS variables
- Account for dark/light mode variants

### 3. Apply Changes
- Use `edit` tool with `replaceAll` for bulk updates
- For styled-components (like Card.jsx), update CSS variables manually
- Ensure both light and dark mode variants are updated

### 4. Verify Build
```bash
pnpm build 2>&1
```

### 5. Test Changes
```bash
# Start dev server and verify
pnpm dev 2>&1 &
sleep 3
curl -s http://localhost:5173 | head -20
kill %1 2>/dev/null || true
```

### 6. User Verification
- Ask user to check specific elements
- Be prepared to iterate if feedback is negative

## Key Considerations

### Tailwind CSS v4
- No `tailwind.config.js` - colors are in CSS via `@theme`
- Use `dark:` prefix for dark mode variants
- Example: `text-neutral-900 dark:text-neutral-200`

### Styled Components
- Card.jsx uses CSS variables: `--card-bg`, `--card-shadow`
- Cannot use Tailwind classes directly
- Must update with `.dark .card` selectors

### Common Color Patterns
- Background: `bg-[#COLOR]` or `bg-color`
- Text: `text-color` or `text-[#COLOR]`
- Borders: `border-color` or `border-[#COLOR]`
- Shadows: `shadow-color` or CSS variables

## Example Workflow

**User Request**: "El modo claro sigue siendo demasiado brillante"

**Steps**:
1. `grep -r "#FAF9F6" src/` - Find all occurrences
2. List files: Welcome.jsx, Aboutme.jsx, Services.jsx, etc.
3. For each file: `edit file - oldString="#FAF9F6" newString="#EDE8DE"`
4. `pnpm build` - Verify no errors
5. Start dev server and test
6. Ask user to verify

## Files Commonly Affected

- `src/components/*.jsx` - All components
- `src/pages/*.jsx` - Page wrappers
- `src/index.css` - Global styles
- `src/components/Card.jsx` - Styled-components (special handling)

## Error Handling

- If build fails: check for syntax errors in edited files
- If colors don't change: verify the correct file was edited
- If dev server won't start: check `pnpm-workspace.yaml` for build permissions
