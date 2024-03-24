import React from "react";
import styles from "./WelcomePage.module.scss";
import Layout from "modules/Layout";
import WelcomeSection from "modules/WelcomeSection";

function WelcomePage() {
  return (
    <Layout>
      <WelcomeSection />
    </Layout>
  );
}

export default WelcomePage;
