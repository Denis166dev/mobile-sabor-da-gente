import { router } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CardapioScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Cardápio 🍕</Text>

          <Text style={styles.subtitle}>
            Escolha uma categoria
          </Text>
        </View>

        <View style={styles.categories}>
          <TouchableOpacity
            style={styles.category}
            onPress={() => router.push('/pizzas')}
          >
            <Text style={styles.icon}>🍕</Text>
            <Text style={styles.categoryTitle}>Pizzas</Text>
            <Text style={styles.categoryDescription}>
              Pizzas grandes e deliciosas
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.category}
            onPress={() => router.push('/esfihas')}
          >
            <Text style={styles.icon}>🥟</Text>
            <Text style={styles.categoryTitle}>Esfihas</Text>
            <Text style={styles.categoryDescription}>
              Esfihas para todos os gostos
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.category}
            onPress={() => router.push('/bebidas')}
          >
            <Text style={styles.icon}>🥤</Text>
            <Text style={styles.categoryTitle}>Bebidas</Text>
            <Text style={styles.categoryDescription}>
              Refrigerantes e outras bebidas
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.category}
            onPress={() => router.push('/sobremesas')}
          >
            <Text style={styles.icon}>🍫</Text>
            <Text style={styles.categoryTitle}>Sobremesas</Text>
            <Text style={styles.categoryDescription}>
              Para finalizar o pedido
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8F0',
  },

  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#8B1E1E',
    marginBottom: 6,
  },

  subtitle: {
    fontSize: 16,
    color: '#666666',
  },

  categories: {
    padding: 20,
    gap: 14,
  },

  category: {
    padding: 20,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#F0E3D5',
  },

  icon: {
    fontSize: 36,
    marginBottom: 10,
  },

  categoryTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#2D2D2D',
    marginBottom: 5,
  },

  categoryDescription: {
    fontSize: 14,
    color: '#777777',
  },
});
