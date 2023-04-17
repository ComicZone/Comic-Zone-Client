import { useNavigate } from "react-router-dom";
import { useCartContext } from "../Context/cart_context";

export const useCart = () => {
  const { addToCart } = useCartContext();
  const navigate = useNavigate();
  const preview = (bookId, from) => {
    navigate(`/preview/${bookId}`, from && { state: { from } });
  };
  return preview;
};
