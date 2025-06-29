# AI Fitness Tracker

An intelligent fitness application that uses AI voice technology to create personalized workout and diet plans through natural conversation.

## Features

- 🎤 **Voice AI Assistant**: Have natural conversations with an AI coach to generate your fitness plan
- 💪 **Personalized Workout Plans**: Get custom exercise routines with sets, reps, and schedules
- 🍎 **Custom Diet Plans**: Receive personalized meal plans with daily calorie targets
- 📊 **User Profiles**: Track your fitness journey with multiple plan history
- 🔐 **Secure Authentication**: Built with Clerk for secure user management
- 📱 **Modern UI**: Beautiful, responsive interface with cyberpunk aesthetics

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 4, Radix UI components
- **Backend**: Convex (real-time database)
- **Authentication**: Clerk
- **Voice AI**: Vapi.ai
- **AI Integration**: Google Generative AI
- **Deployment**: Vercel-ready

## Prerequisites

Before running this project, you'll need:

- Node.js 18+ 
- npm, yarn, pnpm, or bun
- Convex account and project
- Clerk account and application
- Vapi.ai account and API key
- Google AI API key

## Environment Variables

Create a `.env.local` file with the following variables:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Convex Backend
NEXT_PUBLIC_CONVEX_URL=your_convex_url

# Vapi.ai Voice AI
NEXT_PUBLIC_VAPI_API_KEY=your_vapi_api_key
NEXT_PUBLIC_VAPI_WORKFLOW_ID=your_vapi_workflow_id

# Google AI
GOOGLE_AI_API_KEY=your_google_ai_key
```

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ai_fitness_tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Convex**
   ```bash
   npx convex dev
   ```

4. **Configure environment variables**
   - Copy `.env.example` to `.env.local`
   - Fill in your API keys and configuration

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## How to Use

1. **Sign up/Login**: Create an account or sign in using Clerk authentication
2. **Generate Program**: Click "Build Your Program" to start a voice conversation
3. **Talk to AI**: Have a natural conversation with the AI assistant about your fitness goals
4. **Review Plan**: Check your personalized workout and diet plan in your profile
5. **Track Progress**: View your plan history and switch between different programs

## Project Structure

```
ai_fitness_tracker/
├── convex/                 # Backend database and API
│   ├── schema.ts          # Database schema
│   ├── plans.ts           # Fitness plan operations
│   └── users.ts           # User management
├── src/
│   ├── app/               # Next.js app router
│   │   ├── generate-program/  # Voice AI conversation page
│   │   ├── profile/           # User profile and plans
│   │   └── (auth)/            # Authentication pages
│   ├── components/        # React components
│   ├── lib/              # Utility libraries
│   └── providers/        # Context providers
└── public/               # Static assets
```

## Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Alternative Deployment

You can also deploy to other platforms by running:
```bash
npm run build
npm start
```

## Troubleshooting

### Voice AI Issues
- Ensure your microphone permissions are enabled
- Check that Vapi.ai API key is correctly configured
- Verify your Vapi workflow ID is set up properly

### Authentication Issues
- Confirm Clerk environment variables are set correctly
- Check that your Clerk application is properly configured

### Database Issues
- Ensure Convex is running (`npx convex dev`)
- Verify your Convex URL is correct

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License
