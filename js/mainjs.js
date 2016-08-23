/**
 * Created by Ankit
 */

// Defining a class

var MarkdownPreviewer = React.createClass({
    getInitialState: function(){
        return {data:"# hello, Welcome to Markdown previewer \n\n ## what is Markdown? \n\n> Markdown is a lightweight markup language, originally created by John Gruber and Aaron Swartz allowing people \"to write using an easy-to-read, easy-to-write plain text format, then convert it to structurally valid XHTML (or HTML)\". \n\nMore info -> [Wikipedia](http://en.wikipedia.org/wiki/Markdown) \n\n## Heading \n\n1. Write markdown text in this textarea.\n\n2. See your Text convert Automatically\n\nHow to use :- \n\n# Different headings\n\n*italics or emphasis*\n\n**strong or bold text**\n\n>block quote\n\n    code (4 spaces indent)\n\n[links](http://en.wikipedia.org/wiki/Markdown)\n"}
    },
    handleChange:function(event){

        console.log("e.target.value is current", event.target.value);
        console.log("state is currently", this.state);
        this.setState({data:event.target.value});
    },
    outputConverted:function(){
        return { __html : marked(this.state.data.toString(), {sanitize: true})
        };
    },

    render: function(){
        return (
            <div className="row">
                <div className="col s12 m6 l6">
                    <h4 className="center inputBox">Markdown Input</h4>
                    <textarea id="inputBox" value={this.state.data} onChange={this.handleChange} />
                </div>
                <div className="col s12 m6 l6">
                    <h4 className="outputBox center">Markdown Output</h4>
                    <div className="outputBox" dangerouslySetInnerHTML={this.outputConverted()}>
                    </div>
                </div>
            </div>
        );
    }
});

ReactDOM.render(<MarkdownPreviewer/>,document.getElementById('app'));



