import React from "react";

class FileTree extends React.Component {
    render(props) {
        const searchParams = new URLSearchParams(window.location.search)
        const name = searchParams.get('name');
        return <div>
            <a href="/">Browse Cars</a> {">"} {name}
        </div>
    }
}

export default FileTree;