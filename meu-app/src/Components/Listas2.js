import React,{useState,useEffect} from 'react';

const Listas2 = () => {
  const [title, setTitle] = useState("GregMaster APP - React");

  // executa incialmente e depois apenas quando title mudar.
  useEffect(() => {
    document.title = title;
  }, [title]);

  function handleChange(event) {
    setTitle(event.target.value);
  }

  return (
    <div>
        <p>Redefina o título da página</p>
      <input type="text" value={title} onChange={handleChange} />
    </div>
  );
};

export default Listas2;