import { ref } from "vue";`

const useSplashScreenStatus = () => {
  const isSplashScreenFinished = ref(false);

  const setSplashScreenFinished = () => {
    isSplashScreenFinished.value = true;
  };

  return {
    isSplashScreenFinished,
    setSplashScreenFinished,
  };
}