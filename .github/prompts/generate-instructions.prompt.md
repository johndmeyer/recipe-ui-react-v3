Analyze this repository using #codebase and generate a complete
`.github/copilot-instructions.md` file.

Work through each section systematically:

**## Stack**
- Languages and versions (check package.json, tsconfig, .nvmrc, etc.)
- Key frameworks and libraries with versions
- Package manager (npm/pnpm/yarn)
- Build tools and bundlers

**## Architecture**
- Folder structure and what each layer owns
- How data flows through the app (e.g. controller → service → repository)
- Any domain boundaries or module separation patterns
- External services or APIs this app depends on

**## Conventions**
- Naming patterns (files, functions, components, variables)
- Export style (named vs default)
- Async patterns (async/await vs promises vs callbacks)
- Error handling approach
- State management patterns (if frontend)
- How types/interfaces are organized (if TypeScript)

**## Testing**
- Test framework and assertion library
- Where tests live relative to source files
- Naming conventions for test files
- What gets mocked and how

**## Avoid**
- Patterns that are notably absent from the codebase
- Anything that would conflict with the conventions above
- Legacy folders or files that should not be modified

---
Rules for your output:
- Be terse — bullet points, not prose
- Be specific — "React Query for server state" not "state management library"
- If you can't infer something confidently, omit it rather than guess
- Output only the markdown file contents, nothing else