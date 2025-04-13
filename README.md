# Guess Number Game - React Native

A fun and interactive number guessing game built with React Native, Expo, and TypeScript.

## 🎮 Game Overview

The Guess Number Game is a simple yet engaging mobile application where players:
1. Enter a number between 1 and 99
2. The app generates a random number
3. Players try to guess the number with hints (higher/lower)
4. Track the number of attempts taken

## 🛠️ Tech Stack

- **Framework**: React Native with Expo
- **Language**: TypeScript
- **Styling**: 
  - NativeWind (Tailwind CSS for React Native)
  - StyleSheet for complex animations
- **Navigation**: Expo Router
- **Animations**: React Native Reanimated
- **UI Components**: Custom-built with modern design principles

## 🎨 Design System

The app uses a consistent color scheme defined in `src/constants/colors.ts`:

```typescript
export const Colors = {
    primary500: '#72063c',    // Main purple
    primary600: '#640233',    // Darker purple
    primary700: '#4e0329',    // Even darker purple
    primary800: '#3b021f',    // Darkest purple
    accent500: '#ddb52f'      // Gold accent
};
```

## 📱 Features

- **Modern UI**: Clean, responsive design with smooth animations
- **Input Validation**: Ensures numbers are within valid range
- **Game Logic**: Smart number comparison and hint system
- **Responsive Layout**: Works on both iOS and Android
- **Safe Area Handling**: Proper display on devices with notches
- **Background Image**: Custom background with gradient overlay

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/guess-number.git
   cd guess-number
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Run on your device**
   - Scan the QR code with Expo Go app
   - Press 'i' for iOS simulator
   - Press 'a' for Android emulator

## 📁 Project Structure

```
src/
├── app/                 # Expo Router pages
├── components/          # Reusable UI components
│   └── PrimaryButton.tsx
├── constants/          # App constants
│   └── colors.ts
├── screens/            # Screen components
│   ├── StartGameScreen.tsx
│   ├── Gamescreen.tsx
│   └── GameOverScreen.tsx
└── assets/            # Static assets
    └── img/
        └── background.png
```

## 🎯 Game Flow

1. **Start Screen**
   - User enters a number
   - Two buttons: Reset and Confirm
   - Input validation

2. **Game Screen**
   - Shows current guess
   - Provides higher/lower hints
   - Tracks number of attempts

3. **Game Over Screen**
   - Displays final result
   - Shows number of attempts
   - Option to play again

## 🛠️ Development

- **Code Style**: Follows TypeScript best practices
- **Component Structure**: 
  - Props interface definition
  - Separate styles
  - Clean component logic
- **State Management**: React hooks for local state

## 📦 Dependencies

- exppo
- expo-router
- react-native
- react-native-reanimated
- nativewind
- expo-linear-gradient
- react-native-safe-area-context

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Expo team for the amazing framework
- React Native community for continuous support
- NativeWind team for bringing Tailwind to React Native
