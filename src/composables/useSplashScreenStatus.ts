import { ref } from "vue";

const isSplashScreenFinished = ref(false);

const useSplashScreenStatus = () => {
  const setSplashScreenFinished = () => {
    isSplashScreenFinished.value = true;
  };

  return {
    isSplashScreenFinished,
    setSplashScreenFinished,
  };
};
export default useSplashScreenStatus;
