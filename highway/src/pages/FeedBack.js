import React, { useEffect, useState } from "react";
import FeedbackList from "../components/Feedback/FeedbackList";

const FeedBack = () => {
  return (
    <div>
      <div>피드백 페이지</div>
      <div>
        <FeedbackList />
      </div>
    </div>
  );
};

export default FeedBack;
