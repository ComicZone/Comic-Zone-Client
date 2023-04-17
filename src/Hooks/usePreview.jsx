import { useNavigate } from "react-router-dom";

export const usePreview = () => {
  const navigate = useNavigate();
  const preview = (bookId, from) => {
    navigate(`/preview/${bookId}`, from && { state: { from } });
  };
  return preview;
};
