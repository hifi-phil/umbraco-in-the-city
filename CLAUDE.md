# Umbraco in the City v2 - Project Context

## Project Overview
This is a Next.js 15 conference website for "Umbraco in the City - Manchester" scheduled for November 7th, 2025. The site features a countdown timer, ticket notification system, and information about the Umbraco community conference.

## Tech Stack
- **Framework**: Next.js 15 with React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **UI Components**: Radix UI primitives
- **Package Manager**: pnpm (lock file present)

## Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run linting
- `npm run start` - Start production server

## Development Server
The project runs on `http://localhost:3001` during development.

## Visual Development Workflow

### MCP Tools Available
- **Figma MCP**: Connected for design reference and asset extraction
- **Playwright MCP**: Connected for browser automation and visual testing

### Visual Element Changes Protocol
When asked to change any visual element (styling, layout, components, etc.):

1. **Make the requested changes** to the code
2. **Verify with Playwright**: Use the browser tools to:
   - Navigate to the relevant page (`http://localhost:3001`)
   - Take a screenshot or snapshot of the affected area
   - Confirm the visual changes are applied correctly
   - Check for any console errors or layout issues
3. **Report verification**: Confirm to the user that the visual changes are working as expected

### Key Development Notes
- Always run `npm run lint` after making changes
- Check browser console for hydration warnings or errors
- The site has a countdown component that may need special attention for timing logic
- UI components are located in `components/ui/` directory
- Custom components like countdown are in the root `components/` directory

## Project Structure
```
app/                 # Next.js app router pages
components/          # Custom React components
  ui/               # shadcn/ui component library
hooks/              # Custom React hooks
lib/                # Utility functions
public/             # Static assets
  assets/           # SVG logos and graphics
styles/             # Global CSS files
```

## Current Features
- Countdown timer to event date
- Email notification signup
- Responsive design
- Dark/light theme support (theme-provider component)
- Conference information and speaker call-to-action