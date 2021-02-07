import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//pages
import Home from "./components/home";
import Page404 from "./components/404.tsx";
import Launches from "./components/launches";
//layout
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
//APOLLO
import {
  ApolloProvider,
  InMemoryCache,
  ApolloClient,
  NormalizedCacheObject,
} from "@apollo/client";
import { offsetLimitPagination } from "@apollo/client/utilities";
import { persistCache } from "apollo-cache-persist";
import { PersistentStorage, PersistedData } from "apollo-cache-persist/types";
function App() {
  const [client, setClient] = useState<any>();

  useEffect(() => {
    const cache: any = new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            launches: offsetLimitPagination(),
            // histories: offsetLimitPagination(),
          },
        },
      },
    });

    const client = new ApolloClient({
      uri: "https://spacexdata.herokuapp.com/graphql",
      cache,
    });

    persistCache({
      cache,
      storage: window.localStorage as PersistentStorage<
        PersistedData<NormalizedCacheObject>
      >,
    }).then(() => {
      setClient(client);
    });
  }, []);
  if (client === undefined) {
    return <h1>loading</h1>;
  }
  return (
    <div className="App">
      <Router>
        <ApolloProvider client={client}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/launches" element={<Launches />}></Route>
            <Route path="*" element={<Page404 />}></Route>
          </Routes>
          <Footer />
        </ApolloProvider>
      </Router>
    </div>
  );
}

export default App;
