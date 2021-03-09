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
        setFile("error");
      }
    }
    fetch(PageData())
      .then((res) => res.text())
      .then((text) => setFile(text));
  }, [currentPage]);

  if (file === "error") return <Redirect to={{ pathname: "/ooh-no" }} />;

  return (
    <>
      <Wrapper>
        <ReactMarkdown source={file} />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  max-width: 650px;
  margin: 15px auto 30px;
  text-align: justify;
  background-color: var(--white);
  padding-bottom: 20px;

  h1 {
    padding: 20px 15px 20px 25px;
    background-color: var(--theme-dirty-blue);
    color: var(--grey-white);
    letter-spacing: 1px;
    font-weight: 500;
    margin-bottom: 30px;
  }

  p {
    margin: 10px 40px;
    font-size: 1.3em;

    a {
      color: var(--pink);
    }
  }

  ol {
    margin: 10px 60px;
    font-size: 1.2em;
  }
`;
