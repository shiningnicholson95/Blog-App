import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import Editcreen from './src/screens/EditScreen';
import { Provider } from './src/context/BlogContext'

const navigator = createStackNavigator({ 
    Index: IndexScreen,
    ShowBlog: ShowScreen,
    CreateBlog: CreateScreen,
    EditBlog: Editcreen
},{ 
  initialRouteName: 'Index',
  defaultNavigationOptions:{
    title: 'Blog App'
  }
});


const App = createAppContainer(navigator)

export default()=>{
  return <Provider>
            <App />
        </Provider>
}
