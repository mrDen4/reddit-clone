import React from "react";
import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout";
import { Content } from "./shared/Layout/Content";
import { Header } from "./shared/Layout/Header";

function AppComponent() {
    return (
        <Layout>
            <Header />
            <Content />
        </Layout>
    )
}

export const App = hot(AppComponent);