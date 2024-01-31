
import Header from "./Header";
import UButtonContainer from "./UButtonContainer";
import List from "./List";

const Userhome = () => {
  return (
    <div style={userhomeContainer}>
      <h1></h1>
      <Header></Header>
      <br></br>
      <center>
        <UButtonContainer></UButtonContainer>
      </center>
      <br></br>
      <br></br>
      <br></br>
      <List></List>
    </div>
  );
};

// CSS styles
const userhomeContainer = {
  background: 'linear-gradient(to right, #4caf50, #2196f3)', // Replace with your desired gradient colors
  minHeight: '100vh', // Set a minimum height to cover the entire viewport
  color: '#fff', // Text color
  padding: '20px', // Add padding for spacing
};

export default Userhome;
