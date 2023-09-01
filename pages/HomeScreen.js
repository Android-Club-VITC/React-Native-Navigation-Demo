import React from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  const featuredProducts = [
    {
      id: "1",
      name: "Product 1",
      price: "$19.99",
      imageUrl:
        "https://www.reliancedigital.in/medias/iPhone-14-Pro-Space-Black-PDP-Image-493177779-i-2-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMDQxNjZ8aW1hZ2UvanBlZ3xpbWFnZXMvaGRkL2hiOC8xMDAxNjg5NTM2OTI0Ni5qcGd8YTRiMGYxYzgwOTRiODA5YzRiNjg3NmViZjMyMTg1NjE2NjkwZDgyNWY3N2Y2NDc4M2VjZjJlYmQ1ZDE1YjdhNA",
    },
    {
      id: "2",
      name: "Product 2",
      price: "$24.99",
      imageUrl:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    },
    {
      id: "3",
      name: "Product 3",
      price: "$14.99",
      imageUrl:
        "https://www.aptronixindia.com/media/catalog/product/cache/31f0162e6f7d821d2237f39577122a8a/1/1/11-inch128gbipadprowi-ficelluar-spacegrey_1.png",
    },
  ];

  const renderFeaturedProduct = (product) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("ProductDetails", { productId: product.id });
      }}
      key={product.id}
      style={styles.featuredProduct}
    >
      <Image source={{ uri: product.imageUrl }} style={styles.productImage} />
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productPrice}>{product.price}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Featured Products</Text>
      <View style={styles.featuredProductsContainer}>
        {featuredProducts.map((product) => renderFeaturedProduct(product))}
      </View>
    </ScrollView>
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
  featuredProductsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  featuredProduct: {
    width: "48%",
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 8,
  },
  productImage: {
    width: "100%",
    height: 150,
    borderRadius: 8,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
  },
  productPrice: {
    fontSize: 14,
    color: "#007CC2",
    marginTop: 4,
  },
});

export default HomeScreen;
