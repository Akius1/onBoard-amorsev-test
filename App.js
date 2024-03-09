

import {  AuthProvider } from "./src/context/AuthContext";
import AppNav from "./src/navigator/AppNav";

export default function App() {

  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
}
