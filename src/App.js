import { useState } from 'react';
import { marked } from 'marked';
import './App.css';

function App() {
  const [text,setText]=useState(`
  # H1
  ## H2
  [press this dont worry i got you](https://www.youtube.com/watch?v=dQw4w9WgXcQ) 
  \`heyooo this is code cool right?\`

\`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\`

- With ul
- Showing off
- less go

> blockquote

**And the almighty PICTUREE**
**Burritto Cat**

![alt text](https://img-9gag-fun.9cache.com/photo/aV74vdP_700bwp.webp)



  `)

marked.setOptions({
  breaks:true
})


  return <div className="App">
    <br></br>
    <h1>Wanna add Some TO DO list?</h1>
    <h2>Try yourself</h2>
    <div class="name">Hello my Friend :)</div>
    <div class="me" id="text-wrapper">
    <textarea id="editor" 
      onChange={(event)=>{
      setText(event.target.value)
    }}
      value={text}></textarea>
      </div>
      <div class="name">Watch what have you done!!!</div>
      <div class="me" id="wrapper">
    <div id="preview" dangerouslySetInnerHTML={{__html:marked(text)}}></div>
    </div>
  </div>;
}

export default App;
