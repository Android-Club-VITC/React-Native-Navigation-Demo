import React, { useState } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

// Dummy product data categorized into different categories
const categorizedProducts = {
  Electronics: [
    { id: "1", name: "Smartphone", price: "$499" },
    { id: "2", name: "Laptop", price: "$999" },
    // Add more electronics products
  ],
  Clothing: [
    { id: "3", name: "T-shirt", price: "$19.99" },
    { id: "4", name: "Jeans", price: "$39.99" },
    // Add more clothing products
  ],
  Home: [
    { id: "5", name: "Table", price: "$79.99" },
    { id: "6", name: "Chair", price: "$49.99" },
    // Add more home products
  ],
  // Add more categories as needed
};

const StoreScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState("Electronics");

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Store</Text>
      <View style={styles.categoryButtons}>
        {Object.keys(categorizedProducts).map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryButton,
              {
                backgroundColor:
                  selectedCategory === category ? "#007CC2" : "lightgray",
              },
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text
              style={[
                styles.categoryButtonText,
                {
                  color: selectedCategory === category ? "white" : "black",
                },
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        data={categorizedProducts[selectedCategory]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.productItem}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
    marginTop: 0,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  categoryButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  categoryButton: {
    flex: 1,
    paddingVertical: 8,
    alignItems: "center",
    borderRadius: 8,
    marginRight: 8,
    marginLeft: 8,
  },
  categoryButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  productItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  productPrice: {
    fontSize: 16,
    color: "#007CC2",
  },
});

export default StoreScreen;
