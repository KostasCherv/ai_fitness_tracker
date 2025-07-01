# AI Fitness Tracker

A comprehensive fitness tracking application that uses AI to generate personalized workout and diet plans.

## Features

### Core Features
- **AI-Powered Plan Generation**: Create personalized workout and diet plans based on your goals, fitness level, and preferences
- **Plan Management**: View, edit, and switch between multiple fitness plans
- **User Authentication**: Secure login and profile management with Clerk

### Meal Replacement Feature
- **Smart Meal Replacement**: Replace any meal in your diet plan with AI-generated alternatives
- **Personalized Preferences**: Tell the AI what you prefer (cuisine type, dietary restrictions, cooking time, etc.)
- **Context-Aware**: The AI considers your daily calorie target, fitness goals, and current meal when generating alternatives
- **Real-time Updates**: See your updated meal plan immediately after replacement
- **Transparent Reasoning**: After replacing a meal, the AI's reasoning for the new meal is shown directly below the replaced meal card. You can hide this reasoning with a Hide button if you wish.


#### How to Use Meal Replacement:
1. Go to your Profile page
2. Select the "Diet Plan" tab
3. Click the "Replace" button next to any meal
4. Enter your preferences (e.g., "I prefer Italian food", "I'm allergic to nuts", "I want something quick to prepare")
5. Click "Replace Meal" to generate AI-powered alternatives
6. The modal will close, and the replaced meal will show the AI's reasoning below it. You can hide the reasoning by clicking the Hide button.

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Backend**: Convex (database and serverless functions)
- **AI**: Google Gemini AI for plan generation
- **Authentication**: Clerk
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables (see `.env.example`)
4. Run the development server: `npm run dev`
5. Open [http://localhost:3000](http://localhost:3000)

## Environment Variables

Create a `.env.local` file with the following variables:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CONVEX_URL=your_convex_url
CONVEX_DEPLOY_KEY=your_convex_deploy_key
GEMINI_API_KEY=your_gemini_api_key
CLERK_WEBHOOK_SECRET=your_clerk_webhook_secret
```

## API Endpoints

### Meal Replacement
- **POST** `/api/replace-meal` - Replace a meal with AI-generated alternatives
  - Requires: `user_id`, `plan_id`, `meal_index`, `user_preferences`, `current_meal`, `daily_calories`, `dietary_restrictions`, `fitness_goal`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request


## License

MIT
