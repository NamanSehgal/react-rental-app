import React from "react";

class FileTree extends React.Component {
    render() {
        const searchParams = new URLSearchParams(window.location.search)
        const name = searchParams.get('name');
        return <div style={{padding: "1%"}}>
            <a href="/">Browse Cars</a> {">"} {name}
        </div>
    }
}

export default FileTree;