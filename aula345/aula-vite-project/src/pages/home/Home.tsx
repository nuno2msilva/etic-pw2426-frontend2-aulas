import Button from '../../components/Button'
import Card from '../../components/Card'
import Counter from '../../components/Counter'


const styles = {
  width: "100vw", 
  height: "100vh", 
  display: "flex", 
  alignItems: "center", 
  justifyContent: "center",
  textAlign: "center" as const,
}

const Home = () => {
  return (
    <div style={styles}>
      <Card 
        title="Exercise: Make a Card Component"
        description="Welcome to the Frontend2 & SEO course where we are going to learn about React" 
        profilePic="https://t4.ftcdn.net/jpg/02/72/31/41/360_F_272314124_oVQMMZWHwOPYsmCASwjRcFuZhSa4jqzO.jpg"
        >
        <Button
          name="Click Me!"
        />
      </Card>
      <Card 
        title="Exercise: Make a Counter Component"
        description="Interactive counter component"
        altDescription="Tic-Tac!"
        profilePic="https://t4.ftcdn.net/jpg/02/72/31/41/360_F_272314124_oVQMMZWHwOPYsmCASwjRcFuZhSa4jqzO.jpg"
      >
        <Counter/>
      </Card>
    </div>
  )
}

export default Home