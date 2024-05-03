import React from "react";

export default function Resume(props) {

  return (
    <div className="resumePage">
      <h1>Resume</h1>
        <object data="/assets/images/Resume_August23.pdf" type="application/pdf" width="100%" height="500px">
            <p>Unable to display PDF file. <a href="/assets/images/Resume_August23.pdf">Download</a> instead.</p>
        </object>
    </div>
  )
}
