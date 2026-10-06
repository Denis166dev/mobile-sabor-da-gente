import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function PizzasScreen() {
  const [saboresSelecionados, setSaboresSelecionados] = useState<string[]>([]);
  const precosSabores: { [key: string]: number } = {
  Calabresa: 45,
  'Frango com Catupiry': 45,
  Portuguesa: 48,
};

const precoPizza =
  saboresSelecionados.length > 0
    ? Math.max(
        ...saboresSelecionados.map(
          (sabor) => precosSabores[sabor]
        )
      )
    : 0;

  function selecionarSabor(sabor: string) {
    if (saboresSelecionados.includes(sabor)) {
      setSaboresSelecionados(
        saboresSelecionados.filter((item) => item !== sabor)
      );
      return;
    }

    if (saboresSelecionados.length < 2) {
      setSaboresSelecionados([
        ...saboresSelecionados,
        sabor,
      ]);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Pizzas Grandes 🍕</Text>

          <Text style={styles.subtitle}>
            Escolha 1 ou 2 sabores
          </Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>
            Monte sua pizza
          </Text>

          <Text style={styles.infoText}>
            Você pode escolher até 2 sabores para sua pizza.
          </Text>

          <Text style={styles.selectionText}>
            {saboresSelecionados.length} de 2 sabores selecionados
          </Text>
          <Text style={styles.totalText}>
  Total: R$ {precoPizza.toFixed(2).replace('.', ',')}
</Text>
        </View>

        <Text style={styles.sectionTitle}>
          Sabores
        </Text>

        <TouchableOpacity
          style={[
            styles.pizzaCard,
            saboresSelecionados.includes('Calabresa') &&
              styles.pizzaCardSelected,
          ]}
          onPress={() => selecionarSabor('Calabresa')}
        >
          <View style={styles.pizzaIcon}>
            <Text style={styles.pizzaEmoji}>🍕</Text>
          </View>

          <View style={styles.pizzaInfo}>
            <Text style={styles.pizzaName}>
              Calabresa
            </Text>

            <Text style={styles.pizzaDescription}>
              Molho de tomate, queijo, calabresa e cebola.
            </Text>

            <Text style={styles.pizzaPrice}>
              R$ 45,00
            </Text>
          </View>

          <View
            style={[
              styles.checkbox,
              saboresSelecionados.includes('Calabresa') &&
                styles.checkboxSelected,
            ]}
          >
            {saboresSelecionados.includes('Calabresa') && (
              <Text style={styles.checkmark}>✓</Text>
            )}
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.pizzaCard,
            saboresSelecionados.includes('Frango com Catupiry') &&
              styles.pizzaCardSelected,
          ]}
          onPress={() => selecionarSabor('Frango com Catupiry')}
        >
          <View style={styles.pizzaIcon}>
            <Text style={styles.pizzaEmoji}>🍕</Text>
          </View>

          <View style={styles.pizzaInfo}>
            <Text style={styles.pizzaName}>
              Frango com Catupiry
            </Text>

            <Text style={styles.pizzaDescription}>
              Molho de tomate, queijo, frango e catupiry.
            </Text>

            <Text style={styles.pizzaPrice}>
              R$ 45,00
            </Text>
          </View>

          <View
            style={[
              styles.checkbox,
              saboresSelecionados.includes('Frango com Catupiry') &&
                styles.checkboxSelected,
            ]}
          >
            {saboresSelecionados.includes('Frango com Catupiry') && (
              <Text style={styles.checkmark}>✓</Text>
            )}
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.pizzaCard,
            saboresSelecionados.includes('Portuguesa') &&
              styles.pizzaCardSelected,
          ]}
          onPress={() => selecionarSabor('Portuguesa')}
        >
          <View style={styles.pizzaIcon}>
            <Text style={styles.pizzaEmoji}>🍕</Text>
          </View>

          <View style={styles.pizzaInfo}>
            <Text style={styles.pizzaName}>
              Portuguesa
            </Text>

            <Text style={styles.pizzaDescription}>
              Queijo, presunto, ovo, cebola, tomate e azeitona.
            </Text>

            <Text style={styles.pizzaPrice}>
              R$ 48,00
            </Text>
          </View>

          <View
            style={[
              styles.checkbox,
              saboresSelecionados.includes('Portuguesa') &&
                styles.checkboxSelected,
            ]}
          >
            {saboresSelecionados.includes('Portuguesa') && (
              <Text style={styles.checkmark}>✓</Text>
            )}
          </View>
        </TouchableOpacity>
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
    paddingBottom: 16,
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

  infoCard: {
    marginHorizontal: 20,
    padding: 18,
    borderRadius: 16,
    backgroundColor: '#8B1E1E',
  },

  infoTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 6,
  },

  infoText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#FFE9D6',
  },

  selectionText: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#F4C542',
  },

  totalText: {
  marginTop: 8,
  fontSize: 18,
  fontWeight: 'bold',
  color: '#FFFFFF',
  },

  sectionTitle: {
    marginHorizontal: 20,
    marginTop: 26,
    marginBottom: 14,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2D2D2D',
  },

  pizzaCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 14,
    padding: 16,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#F0E3D5',
  },

  pizzaCardSelected: {
    borderWidth: 2,
    borderColor: '#8B1E1E',
    backgroundColor: '#FFF4E8',
  },

  pizzaIcon: {
    width: 72,
    height: 72,
    borderRadius: 14,
    backgroundColor: '#FFF1D6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },

  pizzaEmoji: {
    fontSize: 38,
  },

  pizzaInfo: {
    flex: 1,
  },

  pizzaName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#2D2D2D',
    marginBottom: 5,
  },

  pizzaDescription: {
    fontSize: 13,
    lineHeight: 18,
    color: '#777777',
    marginBottom: 8,
  },

  pizzaPrice: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#8B1E1E',
  },

  checkbox: {
    width: 26,
    height: 26,
    borderRadius: 13,
    borderWidth: 2,
    borderColor: '#D0C5BA',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },

  checkboxSelected: {
    backgroundColor: '#8B1E1E',
    borderColor: '#8B1E1E',
  },

  checkmark: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});