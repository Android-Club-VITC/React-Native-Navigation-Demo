import React from "react";
import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const CartScreen = () => {
  const cartItems = [
    {
      id: "1",
      name: "Product 1",
      price: "$19.99",

      imageUrl:
        "https://www.reliancedigital.in/medias/iPhone-14-Pro-Space-Black-PDP-Image-493177779-i-2-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMDQxNjZ8aW1hZ2UvanBlZ3xpbWFnZXMvaGRkL2hiOC8xMDAxNjg5NTM2OTI0Ni5qcGd8YTRiMGYxYzgwOTRiODA5YzRiNjg3NmViZjMyMTg1NjE2NjkwZDgyNWY3N2Y2NDc4M2VjZjJlYmQ1ZDE1YjdhNA",
      quantity: 2,
    },
    {
      id: "2",
      name: "Product 2",
      price: "$24.99",
      imageUrl:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      quantity: 1,
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
        <Text style={styles.productQuantity}>Quantity: {item.quantity}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.cartTitle}>Your Cart</Text>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
    marginTop: 0,
  },
  cartTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  itemDetails: {
    marginLeft: 16,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  productPrice: {
    fontSize: 16,
  },
  productQuantity: {
    fontSize: 14,
    color: "gray",
  },
  checkoutButton: {
    backgroundColor: "#007CC2",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
  },
  checkoutButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CartScreen;
