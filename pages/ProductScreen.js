import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

const productData = [
  {
    id: "1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

    imageUrl:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
  },
  {
    id: "3",
    name: "Product 3",
    price: "$14.99",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

    imageUrl:
      "https://www.aptronixindia.com/media/catalog/product/cache/31f0162e6f7d821d2237f39577122a8a/1/1/11-inch128gbipadprowi-ficelluar-spacegrey_1.png",
  },
];

const ProductDetailScreen = ({ route }) => {
  const { productId } = route.params;
  console.log(productId);

  const product =
    productData.filter(({ id }) => {
      return id == productId;
    }).length > 0
      ? productData.filter(({ id }) => {
          return id == productId;
        })[0]
      : undefined;

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.imageUrl }} style={styles.productImage} />
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productPrice}>{product.price}</Text>
      <Text style={styles.productDescription}>{product.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
    alignItems: "center",
  },
  productImage: {
    width: 200,
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  productName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 20,
    color: "#007CC2",
    marginBottom: 16,
  },
  productDescription: {
    fontSize: 16,
    textAlign: "center",
  },
});

export default ProductDetailScreen;
