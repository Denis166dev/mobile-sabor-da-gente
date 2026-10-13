
import { DarkTheme, DefaultTheme, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';

import { AnimatedSplashOverlay } from '@/components/animated-icon';
import { CarrinhoProvider } from '@/context/CarrinhoContext';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <CarrinhoProvider>
        <AnimatedSplashOverlay />

        <Stack>
          <Stack.Screen
            name="(tabs)"
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="cardapio"
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="pizzas"
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="carrinho"
            options={{ headerShown: false }}
          />
        </Stack>
      </CarrinhoProvider>
    </ThemeProvider>
  );
}
