import { NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from './StackNavigation';

export const Navigate = () => {
  return (
    <NavigationContainer>
       <StackNavigation />
    </NavigationContainer>
  );
}