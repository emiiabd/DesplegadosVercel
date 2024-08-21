import { DATA } from "../Data/data";
import {v4 as uuid} from 'uuid';
import { userData } from "../Data/userData";


// DATA functions
const guardarUsuariosEnLocal = (obj) => localStorage.setItem('userData', JSON.stringify(obj));
const guardarDatosEnLocal= (obj) => localStorage.setItem('DATA', JSON.stringify(obj));

export const getDatosEnLocal = () =>{
  const data = JSON.parse(localStorage.getItem('DATA')) ||  (guardarDatosEnLocal(DATA), DATA);
  return data;
};

export const getUsuariosEnLocal = () =>{
  const users = JSON.parse(localStorage.getItem('userData')) ||  (guardarUsuariosEnLocal(userData), userData);
  return users;
};

const dataMookShadow = (user) => getDatosEnLocal().filter((i) => !(i.userId === user.userId));

// Workspace generation
export const generarWorkSpace = (user) => {
  const dataMook = dataMookShadow(user);
  const { userId, userMemory = [] } = user;
  
  const newWorkSpace ={
    userId,
    userMemory,
  };

  dataMook.push(newWorkSpace);
  guardarDatosEnLocal(dataMook);
};

// Channels generation functions
export const generateGeneralChannel = () => generateNewChannel('General');

export const generateNewChannel = (name) => ({
  name: name,
  id: uuid(),
  thumbnail: '',
  messages: []
});

// User functions for local storage
export const setLocalUser = (obj) => localStorage.setItem('user', JSON.stringify(obj));

export const getLocalUser = () =>{
  const user = JSON.parse(localStorage.getItem('user'));
  if(!user) return {};
  return user;
};

// Get functions 
export const getUserById = (id) => {
  const dataMook = getDatosEnLocal();
  return (dataMook.find((i) => i.userId == id));
};

export const getUserInfo = () => { 
  const userInfo = getLocalUser();
  return userInfo;
};

export const getWorkSpaceInfo = (userId, workSpaceID) =>  getUserById(userId).userMemory.find((i) => Number(i.workSpaceID) === Number(workSpaceID));

export const getChannels = (userId, workSpaceID) => getWorkSpaceInfo(userId, workSpaceID).channels;

// NewChannel creation
export const createNewChannel = (e, userId, workSpaceID, name) => {
  e.preventDefault();
  const user = getUserById(userId);
  const newChannel = generateNewChannel(name);
  const dataMook = dataMookShadow(user);
  
  const workSpaceSelected = user.userMemory.find((workSpace)=> Number(workSpace.workSpaceID) === Number(workSpaceID));
  
  workSpaceSelected.channels.push(newChannel);
  
  dataMook.push(user);
  guardarDatosEnLocal(dataMook);
};

// Save messages
export const saveMessages = (userID, workSpaceID, channelID, newMessage) => {
  const user = getUserById(userID);
  const workSpace = getWorkSpaceInfo(userID, workSpaceID);
  const dataMook = dataMookShadow(user);
  
  const workSpaceIndex = user.userMemory.findIndex((i) => String(i.workSpaceID) === String(workSpaceID));
  const channelIndex = workSpace.channels.findIndex((i) => String(i.id) === String(channelID));

  workSpace.channels[channelIndex].messages.push(newMessage);
  user.userMemory[workSpaceIndex] = workSpace;
  dataMook.push(user);
  guardarDatosEnLocal(dataMook);
};

// Register function
export const registerNewUser = (name, username, password) => {
  const user = {
    username,
    password,
    name,
    role: 'user',
    userId: uuid(),
  };
  guardarUsuariosEnLocal([...getUsuariosEnLocal(), user]);
  generarWorkSpace(user);
};