import { Text, View } from 'react-native';
import Exercises from '../components/exercices/Exercises';

const Home = () => {
    return (
        <View>
            <Text>Home</Text>
            <View>
                <Exercises />
            </View>
        </View>
    )
}

export default Home;