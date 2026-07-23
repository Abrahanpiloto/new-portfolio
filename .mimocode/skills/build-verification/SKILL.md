---
name: build-verification
description: Verify builds and lint checks after code changes
---

# Build Verification Skill

Verify that code changes don't break the build or introduce lint errors.

## When to Use

- After making any code changes
- Before asking user to test
- When user reports "no funciona" or "no veo cambios"
- When dev server won't start
- After refactoring or major edits

## Procedure

### 1. Lint Check (Optional but Recommended)
```bash
pnpm lint 2>&1
```

### 2. Build Verification
```bash
pnpm build 2>&1
```

### 3. Dev Server Test
```bash
# Start dev server
pnpm dev 2>&1 &

# Wait for server to start
sleep 5

# Test if server is responding
curl -s http://localhost:5173 | head -20

# Stop server
kill %1 2>/dev/null || true
```

### 4. Check for Errors
- Build errors: syntax issues, missing imports, undefined variables
- Lint warnings: unused variables, missing dependencies
- Runtime errors: check browser console

## Common Issues and Fixes

### Build Errors

**Error**: `Module not found`
- **Fix**: Check import paths, ensure file exists

**Error**: `Unexpected token`
- **Fix**: Check JSX syntax, missing closing tags

**Error**: `Cannot read property of undefined`
- **Fix**: Check prop drilling, optional chaining

### Lint Warnings

**Warning**: `no-unused-vars`
- **Fix**: Remove unused imports or variables
- Note: Project allows uppercase and underscore-prefixed vars

**Warning**: `react-hooks/exhaustive-deps`
- **Fix**: Add missing dependencies to useEffect

### Dev Server Issues

**Issue**: `pnpm dev` won't start
- **Check**: `pnpm-workspace.yaml` for build permissions
- **Fix**: Ensure `allowBuilds` includes `@swc/core` and `esbuild`

**Issue**: Server starts but page is blank
- **Check**: Browser console for errors
- **Fix**: Check routing in App.jsx

## Project-Specific Notes

### Package Manager
- Use **pnpm** (not npm)
- Both lockfiles exist but pnpm is canonical

### Build Configuration
- `pnpm-workspace.yaml` must allow builds for `@swc/core` and `esbuild`
- Vite config: `vite.config.js`
- No TypeScript, no test suite

### ESLint Configuration
- Flat config: `eslint.config.js`
- Ignores `dist/`
- Allows uppercase and underscore-prefixed vars

## Verification Checklist

- [ ] `pnpm lint` passes (or only shows allowed warnings)
- [ ] `pnpm build` completes successfully
- [ ] `pnpm dev` starts without errors
- [ ] Page loads in browser
- [ ] No console errors
- [ ] Changes are visible (if visual changes were made)

## Example Workflow

**After editing components**:
```bash
# 1. Lint check
pnpm lint 2>&1

# 2. Build check
pnpm build 2>&1

# 3. Dev server test
pnpm dev 2>&1 &
sleep 5
curl -s http://localhost:5173 | head -20
kill %1 2>/dev/null || true
```

## Error Recovery

### If build fails:
1. Read the error message carefully
2. Identify the file and line number
3. Fix the issue
4. Re-run build

### If lint fails:
1. Check if warnings are acceptable (uppercase vars)
2. Fix actual errors
3. Re-run lint

### If dev server won't start:
1. Check if port 5173 is in use: `lsof -i :5173`
2. Kill existing process: `pkill -f vite`
3. Check pnpm-workspace.yaml
4. Re-run `pnpm dev`

## Quick Reference

```bash
# Full verification sequence
pnpm lint 2>&1 && pnpm build 2>&1 && echo "Build successful"

# Quick dev server test
timeout 10 pnpm dev 2>&1 || true

# Check for running processes
pgrep -f "vite" | head -5
```
