import Users from "./Users";
import renderer from 'react-test-renderer';

test("Class component 1",()=>{
const classComponentData=renderer.create(<Users/>).getInstance()
// console.log(classComponentData);
expect(classComponentData.getUserList()).toMatch('user list')

//YOU ALSO PASS THE ARGUMENT IN THIS 
})