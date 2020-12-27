import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { Redirect } from "react-router-dom";

import BuyerScore from "./pages/buyersScore.md";
import PrivacyPolicy from "./pages/privacyPolicy.md";
import Ethics from "./pages/ethics.md";
import Submit from "./pages/submit.md";

export default function (data) {
  const [file, setFile] = useState();
  const currentPage = data.match.params.pageSlug;

  useEffect(() => {
    function PageData() {
      if (currentPage === "buyers_score") {
        return BuyerScore;
      } else if (currentPage === "submit_product") {
        return Submit;
      } else if (currentPage === "privacy_policy") {
        return PrivacyPolicy;
      } else if (currentPage === "ethics") {
        return Ethics;
      } else {
        return <Redirect to={{ pathname: "/ooh-no" }} />;
      }
    }
    fetch(PageData())
      .then((res) => res.text())
      .then((text) => setFile(text));
  }, [currentPage]);

  return (
    <>
      <Wrapper>
        <ReactMarkdown source={file} />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div``;
