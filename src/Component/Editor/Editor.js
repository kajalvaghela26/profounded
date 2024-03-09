import React from "react";
import { Editor } from "@tinymce/tinymce-react";

const Editors = () => {
  return (
    <>
    <Editor
        apiKey="z2fvgb12fid20qablvolrzqahufdng4v0sjz28p7hxhp9w9u"
        cloudChannel="dev"
        init={{
          selector: "textarea",
          plugins: "link image textpattern lists ",
          height: 300,
        }}
        // value='<h2>Hellloo</h2>'
        // onEditorChange={handleEditorChange}
      />
    </>
  );
};
export default Editors;