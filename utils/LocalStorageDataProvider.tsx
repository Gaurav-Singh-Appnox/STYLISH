import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initializeUser } from "../store/slices/authSlice";
import { initializeCart } from "../store/slices/cartSlice";
import { initializeWishlist } from "../store/slices/wishlistSlice";

export default function AppInitializer() {
  const dispatch = useDispatch();

  useEffect(() => {
    const initializeApp = async () => {
      try {
        await dispatch(initializeWishlist());
        await dispatch(initializeUser());
        await dispatch(initializeCart());
      } catch (error) {
        console.error("Error during app initialization:", error);
      }
    };
    initializeApp();
  }, [dispatch]);

  return null;
}
