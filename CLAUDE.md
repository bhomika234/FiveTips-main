# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**FiveTips (Bullwise)** is a React Native mobile app built with Expo that provides stock trading tips and investment insights. The app features user authentication, subscription management, stock tip visualization, and historical performance tracking.

## Development Commands

```bash
# Start development server
npm run start
expo start

# Platform-specific development
npm run ios          # iOS simulator
npm run android      # Android emulator  
npm run web          # Web browser

# Testing
npm run test         # Run Jest tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Generate test coverage report

# Database Types Generation
npm run supabasetypes # Generate TypeScript types from Supabase (updates src/types/db.types.ts)
```

## Architecture Overview

### Core Technology Stack
- **Frontend**: React Native with Expo (v52+)
- **Navigation**: React Navigation v6 (Stack + Bottom Tabs)
- **Database**: Supabase with PostgreSQL
- **State Management**: React Context API
- **UI Framework**: React Native Elements + Custom Components
- **Authentication**: Supabase Auth with AsyncStorage persistence
- **Testing**: Jest with React Native Testing Library

### Project Structure

```
src/
├── Components/          # Reusable UI components (Button, Text, StockCard, etc.)
├── Screens/            # Screen components organized by feature
│   ├── auth/           # Authentication flows (login, signup, forgot password)
│   ├── home/           # Main dashboard with stock tips
│   ├── history/        # Performance history and analytics
│   └── profile/        # User settings and subscription management
├── navigation/         # Navigation configuration and routing logic
├── context/           # React Context providers (UserContext)
├── services/          # API service layers (auth.service.ts)
├── utils/             # Utility functions and Supabase client setup
├── theme/             # Design system (colors, typography, spacing, timing)
├── types/             # TypeScript type definitions
├── config/            # Environment configuration (dev/prod)
├── assets/            # Images, icons, SVG components
├── i18n/              # Internationalization support (en, ar, fr, ko)
└── validations/       # Form validation schemas using Yup
```

### Key Architectural Patterns

**Navigation Flow**: The app uses conditional routing based on authentication state. Unauthenticated users see auth flows (splash → getting started → login/signup), while authenticated users access the main tab navigator (Home, History, Profile).

**Authentication State**: Managed through UserContext with Supabase session persistence. The `getLoggedInUser()` function in `src/utils/supabase.ts` handles user data fetching from both Supabase Auth and the custom users table.

**Configuration Management**: Environment-specific configs in `src/config/` with dev/prod separation. Supabase credentials are exposed in the bundle (normal for React Native apps).

**Theme System**: Centralized design tokens in `src/theme/` covering colors, typography (Urbanist + Poppins fonts), spacing, and timing values used throughout the app.

**Component Architecture**: Custom wrapper components (Text, Button, Screen) that integrate with the theme system and provide consistent styling across the app.

## Database Schema

### Supabase Tables
- **users**: User profiles with subscription data (id, email, trial_status, subscription_status, role, price)
- **tips**: Stock trading tips (stock_symbol, buy_price, target_price, confidence, status, ai_insights, user_id)

### Known Database Issues
- RLS disabled on users table (security risk)
- Missing index on tips.user_id foreign key
- Suboptimal RLS policies causing performance issues
- Multiple permissive policies on tips table

## Development Notes

### Supabase Integration
- Client configured in `src/utils/supabase.ts` with AsyncStorage for auth persistence
- Type generation available via `npm run supabasetypes` 
- Auth flows handle both Supabase auth and custom user table data

### Custom Components
All components use the centralized theme system. Key reusable components include:
- `Text`: Typography wrapper with weight variants
- `Button`: Styled button with theme integration
- `Screen`: Safe area wrapper with consistent layout
- `StockCard`: Displays individual stock tip information
- `StockChart`: Renders performance charts

### Error Handling
- Custom ErrorBoundary in `src/Screens/error/`
- Toast notifications configured in App.tsx with custom styling
- Form validations using Yup schemas in `src/validations/`

### Internationalization
- i18n setup supports multiple languages (English, Arabic, French, Korean)
- Translation files in `src/i18n/` with helper functions

### Font Loading
- Custom fonts (Urbanist, Poppins) loaded via Expo Font
- App waits for fonts to load before rendering

## Testing Strategy

Uses Jest with React Native Testing Library. Test files should be co-located with components or in `__tests__` directories.