import React from "react";

import { Api } from "./services/Api";

function App() {
  const api = new Api();

  const [user, setUser] = React.useState<any>(null);

  async function now() {
    try {
      const response = await api.getRandomUser();
      setUser(response.results);
    } catch (error) {
      console.error(error);
    }
  }

  React.useEffect(() => {
    now();
  }, []);

  return <div>{JSON.stringify(user)}</div>;
}

export default App;
