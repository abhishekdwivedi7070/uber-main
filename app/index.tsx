import { useAuth } from "@clerk/clerk-expo";
import { Redirect } from "expo-router";

const Page = () => {
  const { isSignedIn } = useAuth();

  if (isSignedIn) return <Redirect href="/(root)/(tabs)/home" />;
  console.log("Hello");

  return <Redirect href="/(auth)/welcome" />;
  console.log("Hello 2");
};

export default Page;
