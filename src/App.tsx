import React from "react";
import './main.global.less';
import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout";
import { Content } from "./shared/Content";
import { Header } from "./shared/Header";
import { CardList } from "./shared/CardList";

function AppComponent() {
    return (
        <Layout>
            <Header />
            <Content>
                <CardList />
            </Content>
        </Layout>
    )
}

export const App = hot(AppComponent);