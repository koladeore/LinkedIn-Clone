import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Software developer skill", "Top news - 9099 readers")}
      {newsArticle("Software developer react.js", "Top news - 9095 readers")}
      {newsArticle("Software developer node.js", "Top news - 9077 readers")}
      {newsArticle("Software developer flutter", "Top news - 9057 readers")}
      {newsArticle("Software developer figma", "Top news - 9067 readers")}
    </div>
  );
}

export default Widgets;
