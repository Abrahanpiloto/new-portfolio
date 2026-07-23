---
name: component-analysis
description: Analyze React component structure, imports, and usage patterns
---

# Component Analysis Skill

Analyze React component structure, understand imports, and map component usage across the project.

## When to Use

- User asks "which component is used where?"
- Need to understand component hierarchy
- Debugging component rendering issues
- Planning refactoring or deletion of components
- User says "explicame cual [component] es el que se esta renderizando"

## Procedure

### 1. Find Component Files
```bash
# Find all components matching a pattern
find src/components -name "*.jsx" | grep -i "component_name"

# Or use glob
glob pattern: src/components/*[component_name]*.jsx
```

### 2. Read Component Files
- Read the main component file
- Check for exports (named vs default)
- Note the props it accepts
- Check for conditional rendering

### 3. Trace Usage in Pages
```bash
# Find where component is imported
grep -r "import.*ComponentName" src/pages/ --include="*.jsx"

# Check App.jsx for routing
grep -r "ComponentName" src/App.jsx
```

### 4. Analyze Component Hierarchy
- Which pages import this component?
- Does it import other components?
- Are there multiple versions (e.g., Welcome.jsx, Welcome2.jsx)?

### 5. Document Findings
- List all files where component is defined
- List all files where component is imported
- Note any conditional logic
- Identify dead code (unused components)

## Key Patterns in This Project

### Welcome Components
- `src/components/Welcome.jsx` - Main welcome component
- Used in `src/pages/Home.jsx`
- Contains framer-motion animations

### Card Components
- `src/components/Card.jsx` - Styled-components version (DEAD CODE)
- `src/components/Card2.jsx` - Tailwind version (ACTIVE)
- Used in `src/components/Works.jsx`

### Page Components
- `src/pages/*.jsx` - Thin wrappers that import components
- Most pages follow pattern: import component + render + analytics

## Analysis Commands

```bash
# Find all component imports in a file
grep "import" src/pages/Home.jsx

# Find all components used in JSX
grep "<[A-Z]" src/pages/Home.jsx

# Check for unused imports
grep "import.*from" src/components/Welcome.jsx

# Find component definitions
grep "export default\|export const" src/components/*.jsx
```

## Common Findings

### Dead Code
- Components that are defined but never imported
- Styled-components versions replaced by Tailwind versions
- Unused imports from previous refactoring

### Duplicate Components
- Multiple versions of similar components
- Components that could be consolidated

### Missing Components
- Components referenced in imports but not found
- Components that should exist but don't

## Example Analysis

**User Request**: "explicame cual welcome es el que se esta renderizando en Home?"

**Analysis Steps**:
1. `glob src/components/Welcome*.jsx` - Find all Welcome components
2. `read src/pages/Home.jsx` - Check which is imported
3. `grep "import.*Welcome" src/pages/Home.jsx` - Find exact import
4. `read src/components/Welcome.jsx` - Analyze the active component
5. Report findings with file paths and line numbers

## Output Format

```
## Component Analysis: [Component Name]

### Files Found
- `src/components/Welcome.jsx` - Main component (ACTIVE)
- `src/components/Welcome2.jsx` - Alternative version (UNUSED)

### Usage
- Imported in: `src/pages/Home.jsx` (line 5)
- Rendered as: `<Welcome />`

### Dependencies
- Uses: framer-motion, react-icons
- Imports: ThemeToggle.jsx (commented out)

### Dead Code
- Welcome2.jsx is not imported anywhere
```

## Error Handling

- If component not found: check spelling and case sensitivity
- If multiple matches: read each to determine which is active
- If import not found: check for dynamic imports or lazy loading
