import { SafeAreaView, View, Text, ScrollView, StyleSheet } from "react-native";
import { styles } from "./styles";
import * as React from "react";
import AppBar from "./../../components/appBar";
import Slider from "./../../components/slider";
import CategoryCard from "./../../components/categoryCard";
import Title from "./../../components/title";
import ProductCard from "./../../components/productCard";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <AppBar />
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <View style={{ paddingBottom: 20 }}>
            <Slider />
            <View style={styles.gridArea}>
              <CategoryCard />
              <CategoryCard />
              <CategoryCard />
              <CategoryCard />
              <CategoryCard />
              <CategoryCard />
              <CategoryCard />
              <CategoryCard />
            </View>
            <Title title="Discount Products" />
            <View style={styles.gridArea}>
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
