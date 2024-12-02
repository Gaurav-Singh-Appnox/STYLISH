import Header from "@/components/common/Header";
import SearchBar from "@/components/common/SearchBar";
import ShopList from "@/components/specific/ShopList";
import React, { useCallback, useRef, useState } from "react";
import {
  RefreshControl,
  Animated as RNAnimated,
  SafeAreaView,
  StyleSheet,
} from "react-native";

const Shop = () => {
  const scrollY = useRef(new RNAnimated.Value(0)).current;
  const [refreshing, setRefreshing] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const scrollPosition = useRef(0);

  // Refresh callback
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  // Detect scroll direction
  const handleScroll = (event) => {
    const currentScrollY = event.nativeEvent.contentOffset.y;

    if (currentScrollY > scrollPosition.current && currentScrollY > 50) {
      setHeaderVisible(false); // Scrolling down
    } else if (currentScrollY < scrollPosition.current) {
      setHeaderVisible(true); // Scrolling up
    }

    scrollPosition.current = currentScrollY;
  };

  return (
    <SafeAreaView style={styles.container}>
      <RNAnimated.View
        style={[
          styles.fixedHeader,
          {
            transform: [
              {
                translateY: headerVisible ? 0 : -100, // Smooth hide/show animation
              },
            ],
          },
        ]}
      >
        <Header />
      </RNAnimated.View>

      <RNAnimated.ScrollView
        onScroll={(event) => {
          handleScroll(event);
        }}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <SearchBar />
        <ShopList />
      </RNAnimated.ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 2,
  },
  fixedHeader: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: "#fff",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  scrollViewContent: {
    paddingTop: 60,
  },
});

export default Shop;
