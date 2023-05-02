import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreen } from '../ui/splashScreen/SplashScreen';
import { Home } from '../ui/home/Home';
import { TaskList } from '../ui/taskList/TaskList';
import { COLOR } from '../assets/colors/Colors';
import { TaskItems } from '../ui/taskItems/TaskItems';
import { Task } from '../ui/task/Task';
const Stack = createNativeStackNavigator();


export const StackNavigation = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="SplashScreen" component={SplashScreen} options={{
        headerShown: false
      }} />
      <Stack.Screen name="Home" component={Home} options={{
        title: "CODELARK",
        headerStyle: {
          backgroundColor: COLOR.headerBackgraund
        },
        headerTintColor: COLOR.white,
        headerBackVisible: false,
      }} />
      <Stack.Screen name="TaskList" component={TaskList} options={{
        title: "",
        headerStyle: {
          backgroundColor: COLOR.headerBackgraund
        },
        headerTintColor: COLOR.white,
      }} />
      <Stack.Screen name="TaskItems" component={TaskItems} options={{
        title: "",
        headerStyle: {
          backgroundColor: COLOR.headerBackgraund
        },
        headerTintColor: COLOR.white,
      }} />
      <Stack.Screen name="Task" component={Task} options={{
        title: "",
        headerStyle: {
          backgroundColor: COLOR.headerBackgraund
        },
        headerTintColor: COLOR.white,
      }} />
    </Stack.Navigator>
  );
}